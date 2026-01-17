const {
  generateRandomLetters,
  isValidWord,
  longestWord,
  generateKviz,
  generateNumbers,
  generateSpojnica,
  generateSkocko,
  generateAsocijacije,
} = require("./games/slagalica");

const rooms = {};
const liveGames = require("./liveGames");

const DEFAULT_STATS = () => ({
  slagalica: 0,
  mojBroj: 0,
  skocko: 0,
  asocijacije: 0,
  kviz: 0,
  spojnice: 0,
});

const getGame = (roomName) => liveGames.find((g) => g.roomName === roomName);

const ensureStats = (game, id) => {
  if (!game.statistics) game.statistics = {};
  if (!game.statistics[id]) game.statistics[id] = DEFAULT_STATS();
};

const ensureGenerated = (game) => {
  if (!game) return;
  if (game.letters && game.letters.length > 0) return; // vec generisano

  console.log("Generisanje novih podataka igre...");

  const letters = generateRandomLetters();
  const longestWordSend = longestWord(letters);

  const {
    random999,
    singleDigits,
    randomDoubleDigit,
    randomExtendedDigit,
  } = generateNumbers();

  game.kviz = generateKviz();
  game.mainNumber = random999;
  game.arrayNumber = singleDigits;
  game.singleDigits = randomDoubleDigit;
  game.extendedDigits = randomExtendedDigit;

  game.letters = letters;
  game.longestWord = longestWordSend;

  game.skocko = generateSkocko();
  game.spojnica = generateSpojnica();
  game.asocijacija = generateAsocijacije();
};

const emitRoomReady = (io, roomName, game) => {
  io.to(roomName).emit("roomReady", {
    roomName,
    letters: game.letters,
    longestWordSend: game.longestWord,
    mainNumber: game.mainNumber,
    singleDigits: game.arrayNumber,
    extendedDigits: game.extendedDigits,
    randomDoubleDigit: game.singleDigits,
    spojnica: game.spojnica,
    skocko: game.skocko,
    asocijacija: game.asocijacija,
    kviz: game.kviz,
    players: game.players,
  });
};

const emitRoomReadySingle = (socket, roomName, game) => {
  socket.emit("roomReadySingle", {
    roomName,
    letters: game.letters,
    longestWordSend: game.longestWord,
    mainNumber: game.mainNumber,
    singleDigits: game.arrayNumber,
    extendedDigits: game.extendedDigits,
    randomDoubleDigit: game.singleDigits,
    spojnica: game.spojnica,
    skocko: game.skocko,
    asocijacija: game.asocijacija,
    kviz: game.kviz,
    players: game.players,
  });
};

const handleSocket = (socket, io) => {
  console.log(`Korisnik spojen: ${socket.id}`);

  socket.on("createGameLink", () => {
    const roomName = `room-${socket.id}`;
    rooms[roomName] = [];

    // ⚡ bitno za disconnect cleanup: host dobije userId
    socket.userId = socket.id;

    liveGames.push({
      roomName,
      live: true,
      statistics: {
        [socket.id]: DEFAULT_STATS(),
      },
      players: [],
      kviz: [],
      skocko: [],
      asocijacija: {},
      spojnica: {},
      letters: [],
      longestWord: "",
      mainNumber: 0,
      arrayNumber: [],
      singleDigits: 0,
      extendedDigits: 0,
    });

    socket.emit("gameLinkCreated", { roomName, id: socket.id });
  });

  socket.on("joinRoom", ({ roomName, id }) => {
    if (!roomName || id == null) return;
    if (!rooms[roomName]) return;

    // capacity check
    if (!rooms[roomName].includes(id) && rooms[roomName].length === 2) {
      socket.emit("fullRoom");
      return;
    }

    const currentGame = getGame(roomName);
    if (!currentGame) return;

    // if player already in currentGame.players -> just join socket room & emit
    if (currentGame.players.includes(id)) {
      socket.join(roomName);
      socket.userId = id;
      socket.emit("roomJoined", { roomName, id });
      return;
    }

    // add to rooms list
    if (!rooms[roomName].includes(id)) rooms[roomName].push(id);

    // add to live game players (max 2)
    if (currentGame.players.length < 2 && !currentGame.players.includes(id)) {
      currentGame.players.push(id);
      ensureStats(currentGame, id);
      console.log("Pridruzen sobi igrac: ", id);
    }

    socket.join(roomName);
    socket.userId = id;

    socket.emit("roomJoined", { roomName, id });
  });

  socket.on("refresh", ({ roomNameGet, id }) => {
    if (!roomNameGet || id == null) return;

    const currentRoom = getGame(roomNameGet);

    if (currentRoom && currentRoom.players?.includes(id)) {
      socket.emit("roomJoinedRefresh", { roomNameGet, currentRoom, id });
      return;
    }

    socket.emit("roomClosed", {
      message:
        "Soba je zatvorena, molimo vas vratite se na pocetnu i pocnite novu igru!",
    });
  });

  socket.on("isValidWord", ({ word }) => {
    socket.emit("validTrue", { valid: isValidWord(word) });
  });

  socket.on("gameLink", async ({ roomName, id }) => {
    if (!roomName || id == null) return;

    if (!rooms[roomName]) {
      console.log(`Greška: Soba ${roomName} ne postoji.`);
      return;
    }

    // always join socket room (cheap, safe)
    socket.join(roomName);

    const currentGame = getGame(roomName);
    if (!currentGame) return;

    // game starts only when 2 players
    if (currentGame.players.length !== 2) return;

    // generate once
    if (!currentGame.letters || currentGame.letters.length === 0) {
      ensureGenerated(currentGame);
    } else {
      // console.log("Igra je već generisana, ponovo šaljem podatke...");
    }

    emitRoomReady(io, roomName, currentGame);
  });

  socket.on("gameConfirmed", ({ game, roomName, points, socketId }) => {
    // minimal validation (stabilnost)
    if (typeof points !== "number" || Number.isNaN(points)) return;
    if (!game || !socketId) return;

    if (roomName === "singleplayer") {
      const currentGame = getGame(`room-${socketId}`);
      if (!currentGame) return;

      ensureStats(currentGame, socketId);
      currentGame.statistics[socketId][game] = points;

      io.to(socketId).emit("pointsUpdated", { points: currentGame.statistics });
      return;
    }

    const currentGame = getGame(roomName);
    if (!currentGame) return;

    ensureStats(currentGame, socketId);
    currentGame.statistics[socketId][game] = points;

    io.to(roomName).emit("pointsUpdated", { points: currentGame.statistics });
  });

  // Singleplayer
  socket.on("singleRoom", ({ id }) => {
    if (!id) return;

    const roomName = `room-${id}`;
    rooms[roomName] = [id];

    socket.userId = id;

    liveGames.push({
      roomName,
      live: true,
      statistics: {
        [id]: DEFAULT_STATS(),
      },
      players: [id],
      kviz: [],
      skocko: [],
      asocijacija: {},
      spojnica: {},
      letters: [],
      longestWord: "",
      mainNumber: 0,
      arrayNumber: [],
      singleDigits: 0,
      extendedDigits: 0,
    });

    socket.emit("singleGameCreated", { roomName, id });

    const currentGame = getGame(roomName);
    if (!currentGame) return;

    socket.join(id);

    ensureGenerated(currentGame);
    emitRoomReadySingle(socket, roomName, currentGame);
  });

  socket.on("createDataSingle", ({ roomName }) => {
    if (!roomName) return;

    const currentGame = getGame(roomName);
    if (!currentGame) return;

    ensureGenerated(currentGame);
    emitRoomReadySingle(socket, roomName, currentGame);
  });

  socket.on("disconnect", () => {
    console.log(`Korisnik odspojen: ${socket.id}`);

    const userId = socket.userId;
    if (!userId) return;

    for (const [roomName, users] of Object.entries(rooms)) {
      if (!users.includes(userId)) continue;

      // remove from rooms
      rooms[roomName] = users.filter((x) => x !== userId);

      const currentGame = getGame(roomName);

      if (rooms[roomName].length === 0) {
        delete rooms[roomName];

        const idx = liveGames.findIndex((g) => g.roomName === roomName);
        if (idx !== -1) liveGames.splice(idx, 1);
      } else {
        if (currentGame && Array.isArray(currentGame.players)) {
          currentGame.players = currentGame.players.filter((p) => p !== userId);
        }

        io.to(roomName).emit("playerLeft", {
          message: "Igrač je napustio sobu.",
          remainingPlayers: currentGame ? currentGame.players : [],
        });
      }

      break;
    }
  });
};

module.exports = { handleSocket };
