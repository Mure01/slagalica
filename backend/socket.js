const {
  generateRandomLetters,
  isValidWord,
  longestWord,
  generateNumbers,
} = require("./games/slagalica");
const rooms = {};
const liveGames = require('./liveGames')

const handleSocket = (socket, io) => {
  console.log(`Korisnik spojen: ${socket.id}`);

  socket.on("createGameLink", () => {
    let roomName = `room-${socket.id}`;
    rooms[roomName] = [];
    liveGames.push({roomName,live:true, statistics: {
      [socket.id]: {
        slagalica: 0,
        mojBroj: 0,
        skocko: 0,
        asocijacije: 0,
        kviz:0,
        spojnice: 0
      }
    }, players: [], letters: [], longestWord: "", mainNumber: 0, arrayNumber: [], singleDigits: 0, extendedDigits:0 })
    socket.emit("gameLinkCreated", { roomName, id: socket.id });
  });

  socket.on("joinRoom", ({ roomName, id }) => {
    if (rooms[roomName]) {
      if (!rooms[roomName].includes(id) && id !== null) {
        if (rooms[roomName].length == 2) {
          socket.emit("fullRoom");
          return;
        }
        rooms[roomName].push(id);
        socket.join(roomName);
        socket.userId = id
        if(liveGames.find(game => game.roomName === roomName).players.length < 2){
        liveGames.find(game => game.roomName === roomName).players.push(id)
        liveGames.find(game => game.roomName === roomName).statistics[id] = {
          slagalica: 0,
          mojBroj: 0,
          skocko: 0,
          asocijacije: 0,
          kviz:0,
          spojnice: 0
        }}
        console.log("Pridruzen sobi igrac: ", id);
        socket.emit("roomJoined", { roomName, id: id });
      }
    }
  });

  socket.on("refresh", ({ roomNameGet, id }) => {
    let roomFound = false;
    console.log("liveGames", liveGames)
    for (const [roomName, users] of Object.entries(rooms)) {
      if (users.includes(id)) {
        console.log("Soba pronadjena: ", roomName);
        roomFound = true;
        const currentRoom = liveGames.find(game => game.roomName === roomName)
        socket.emit("roomJoinedRefresh", { roomNameGet, currentRoom, id });
        break;
      }
    }
    
    if (!roomFound) {
      socket.emit("roomClosed", { message: "Soba je zatvorena, molimo vas vratite se na pocetnu i pocnite novu igru!" });
    }
  });

  socket.on("isValidWord", ({ word }) => {
    socket.emit("validTrue", { valid: isValidWord(word) });
  });

  socket.on("gameLink", async ({ roomName, id }) => {
    if (rooms[roomName]) {
      if (!rooms[roomName].includes(id)) {
        socket.join(roomName); 
      }

      if (rooms[roomName].length === 2) {
        const letters = generateRandomLetters();
        const longestWordSend = longestWord(letters);
        const {
          random999,
          singleDigits,
          randomDoubleDigit,
          randomExtendedDigit
        } = generateNumbers()

        liveGames.find(game => game.roomName === roomName).mainNumber = random999
        liveGames.find(game => game.roomName === roomName).arrayNumber = singleDigits
        liveGames.find(game => game.roomName === roomName).singleDigits = randomDoubleDigit
        liveGames.find(game => game.roomName === roomName).extendedDigits = randomExtendedDigit
        liveGames.find(game => game.roomName === roomName).letters = letters
        liveGames.find(game => game.roomName === roomName).longestWord = longestWordSend
        io.to(roomName).emit("roomReady", {
          roomName,
          letters,
          longestWordSend,
          mainNumber: random999,
          singleDigits,
          extendedDigits: randomExtendedDigit,
          randomDoubleDigit,
          players: liveGames.find(game => game.roomName === roomName).players
        });
      }
    } else {
      console.log(`Greška: Soba ${roomName} ne postoji.`);
    }
  });

  socket.on('gameConfirmed', ({game,roomName, points, socketId }) => {
    console.log(game, roomName, points, socketId)
    const currentGame = liveGames.find(game => game.roomName === roomName)
    if(currentGame){
      currentGame.statistics[socketId][game] = points
      io.to(roomName).emit('pointsUpdated', { points: currentGame.statistics });
    }
  })

  socket.on("disconnect", () => {
    console.log(`Korisnik odspojen: ${socket.id}`);
    
    for (const [roomName, users] of Object.entries(rooms)) {
      if (users.includes(socket.userId)) {
        rooms[roomName] = users.filter((id) => id !== socket.userId);
  
        if (rooms[roomName].length === 0) {
          delete rooms[roomName];

          const gameIndex = liveGames.findIndex(game => game.roomName === roomName);
          if (gameIndex !== -1) {
            liveGames.splice(gameIndex, 1);
          }
        } else {
          const currentGame = liveGames.find(game => game.roomName === roomName);
          if (currentGame) {
            currentGame.players = currentGame.players.filter(player => player !== socket.userId);
          }
  
          io.to(roomName).emit("playerLeft", {
            message: "Igrač je napustio sobu.",
            remainingPlayers: currentGame ? currentGame.players : []
          });
        }
        break;
      }
    }
  
    console.log("Sve sobe nakon odspajanja:", rooms);
  });
  
};

module.exports = { handleSocket };
