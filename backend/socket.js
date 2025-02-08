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

const handleSocket = (socket, io) => {
  console.log(`Korisnik spojen: ${socket.id}`);

  socket.on("createGameLink", () => {
    let roomName = `room-${socket.id}`;
    rooms[roomName] = [];
    liveGames.push({
      roomName,
      live: true,
      statistics: {
        [socket.id]: {
          slagalica: 0,
          mojBroj: 0,
          skocko: 0,
          asocijacije: 0,
          kviz: 0,
          spojnice: 0,
        },
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
    if (rooms[roomName]) {
      if (!rooms[roomName].includes(id) && id !== null) {
        if (rooms[roomName].length == 2) {
          socket.emit("fullRoom");
          return;
        }
        if (
          liveGames
            .find((game) => game.roomName === roomName)
            .players.includes(id)
        ) {
          socket.emit("roomJoined", { roomName, id: id });
          socket.join(roomName);
        } else {
          rooms[roomName].push(id);
          socket.join(roomName);
          socket.userId = id;
          if (liveGames.length > 0) {
            if (
              liveGames.find((game) => game.roomName === roomName).players
                .length < 2
            ) {
              liveGames
                .find((game) => game.roomName === roomName)
                .players.push(id);
              if (
                !liveGames.find((game) => game.roomName === roomName)
                  .statistics[id]
              ) {
                liveGames.find((game) => game.roomName === roomName).statistics[
                  id
                ] = {
                  slagalica: 0,
                  mojBroj: 0,
                  skocko: 0,
                  asocijacije: 0,
                  kviz: 0,
                  spojnice: 0,
                };
              }
              console.log("Pridruzen sobi igrac: ", id);
            }
          }
        }
        socket.emit("roomJoined", { roomName, id: id });
      }
    }
  });

  socket.on("refresh", ({ roomNameGet, id }) => {
    let roomFound = false;
    console.log("liveGames", liveGames);
    if (liveGames.length > 0) {
      if (
        liveGames
          .find((game) => game.roomName === roomNameGet)
          ?.players.includes(id)
      ) {
        console.log("Soba pronadjena: ", roomNameGet);
        roomFound = true;
        const currentRoom = liveGames.find(
          (game) => game.roomName === roomNameGet
        );
        socket.emit("roomJoinedRefresh", { roomNameGet, currentRoom, id });
      }

      if (!roomFound) {
        socket.emit("roomClosed", {
          message:
            "Soba je zatvorena, molimo vas vratite se na pocetnu i pocnite novu igru!",
        });
      }
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

      const currentGame = liveGames.find((game) => game.roomName === roomName);

      if (currentGame.players.length === 2) {
        if (currentGame.letters.length === 0) {
          console.log("Generisanje novih podataka igre...");
          const letters = generateRandomLetters();
          const longestWordSend = longestWord(letters);
          const {
            random999,
            singleDigits,
            randomDoubleDigit,
            randomExtendedDigit,
          } = generateNumbers();
          const skocko = generateSkocko();
          const spojnica = generateSpojnica();
          const asocijacija = generateAsocijacije();
          const kviz = generateKviz();

          currentGame.kviz = kviz;
          currentGame.mainNumber = random999;
          currentGame.arrayNumber = singleDigits;
          currentGame.singleDigits = randomDoubleDigit;
          currentGame.extendedDigits = randomExtendedDigit;
          currentGame.letters = letters;
          currentGame.longestWord = longestWordSend;
          currentGame.skocko = skocko;
          currentGame.spojnica = spojnica;
          currentGame.asocijacija = asocijacija;
        } else {
          console.log("Igra je već generisana, ponovo šaljem podatke...");
        }

        io.to(roomName).emit("roomReady", {
          roomName,
          letters: currentGame.letters,
          longestWordSend: currentGame.longestWord,
          mainNumber: currentGame.mainNumber,
          singleDigits: currentGame.arrayNumber,
          extendedDigits: currentGame.extendedDigits,
          randomDoubleDigit: currentGame.singleDigits,
          spojnica: currentGame.spojnica,
          skocko: currentGame.skocko,
          asocijacija: currentGame.asocijacija,
          kviz: currentGame.kviz,
          players: currentGame.players,
        });
      }
    } else {
      console.log(`Greška: Soba ${roomName} ne postoji.`);
    }
  });

  socket.on("gameConfirmed", ({ game, roomName, points, socketId }) => {
    console.log(game, roomName, points, socketId);
    console.log(liveGames.find((game) => game.roomName === `room-${socketId}`))
    if(roomName == 'singleplayer') {
      const currentGame = liveGames.find((game) => game.roomName === `room-${socketId}`)
      if (currentGame) {
      currentGame.statistics[socketId][game] = points;
      console.log("Postoji igra", currentGame.statistics[socketId])
      io.to(socketId).emit("pointsUpdated", { points: currentGame.statistics });
      }
    }else {

      const currentGame = liveGames.find((game) => game.roomName === roomName);
      if (currentGame) {
        currentGame.statistics[socketId][game] = points;
        io.to(roomName).emit("pointsUpdated", { points: currentGame.statistics });
      }
    }
  });

  //Singleplayer

  socket.on("singleRoom", ({id}) => {
    let roomName = `room-${id}`;
    rooms[roomName] = [id];
    liveGames.push({
      roomName,
      live: true,
      statistics: {
        [id]: {
          slagalica: 0,
          mojBroj: 0,
          skocko: 0,
          asocijacije: 0,
          kviz: 0,
          spojnice: 0,
        },
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
    socket.emit("singleGameCreated", { roomName, id: id });
    const currentGame = liveGames.find((game) => game.players.includes(id));
    socket.join(id);
      if (currentGame.players) {
        if (currentGame.letters.length === 0) {
          console.log("Generisanje novih podataka igre...");
          const letters = generateRandomLetters();
          const longestWordSend = longestWord(letters);
          const {
            random999,
            singleDigits,
            randomDoubleDigit,
            randomExtendedDigit,
          } = generateNumbers();
          const skocko = generateSkocko();
          const spojnica = generateSpojnica();
          const asocijacija = generateAsocijacije();
          const kviz = generateKviz();

          currentGame.kviz = kviz;
          currentGame.mainNumber = random999;
          currentGame.arrayNumber = singleDigits;
          currentGame.singleDigits = randomDoubleDigit;
          currentGame.extendedDigits = randomExtendedDigit;
          currentGame.letters = letters;
          currentGame.longestWord = longestWordSend;
          currentGame.skocko = skocko;
          currentGame.spojnica = spojnica;
          currentGame.asocijacija = asocijacija;
        } else {
          console.log("Igra je već generisana, ponovo šaljem podatke...");
        }

        socket.emit("roomReadySingle", {
          roomName,
          letters: currentGame.letters,
          longestWordSend: currentGame.longestWord,
          mainNumber: currentGame.mainNumber,
          singleDigits: currentGame.arrayNumber,
          extendedDigits: currentGame.extendedDigits,
          randomDoubleDigit: currentGame.singleDigits,
          spojnica: currentGame.spojnica,
          skocko: currentGame.skocko,
          asocijacija: currentGame.asocijacija,
          kviz: currentGame.kviz,
          players: currentGame.players,
        });
      }
  });
  socket.on('createDataSingle', ({roomName, id}) => {
    const currentGame = liveGames.find((game) => game.roomName === roomName);

    if (currentGame.players) {
      if (currentGame.letters.length === 0) {
        console.log("Generisanje novih podataka igre...");
        const letters = generateRandomLetters();
        const longestWordSend = longestWord(letters);
        const {
          random999,
          singleDigits,
          randomDoubleDigit,
          randomExtendedDigit,
        } = generateNumbers();
        const skocko = generateSkocko();
        const spojnica = generateSpojnica();
        const asocijacija = generateAsocijacije();
        const kviz = generateKviz();

        currentGame.kviz = kviz;
        currentGame.mainNumber = random999;
        currentGame.arrayNumber = singleDigits;
        currentGame.singleDigits = randomDoubleDigit;
        currentGame.extendedDigits = randomExtendedDigit;
        currentGame.letters = letters;
        currentGame.longestWord = longestWordSend;
        currentGame.skocko = skocko;
        currentGame.spojnica = spojnica;
        currentGame.asocijacija = asocijacija;
      } else {
        console.log("Igra je već generisana, ponovo šaljem podatke...");
      }

      socket.emit("roomReadySingle", {
        roomName,
        letters: currentGame.letters,
        longestWordSend: currentGame.longestWord,
        mainNumber: currentGame.mainNumber,
        singleDigits: currentGame.arrayNumber,
        extendedDigits: currentGame.extendedDigits,
        randomDoubleDigit: currentGame.singleDigits,
        spojnica: currentGame.spojnica,
        skocko: currentGame.skocko,
        asocijacija: currentGame.asocijacija,
        kviz: currentGame.kviz,
        players: currentGame.players,
      });
    }
  })

  socket.on("disconnect", () => {
    console.log(`Korisnik odspojen: ${socket.id}`);

    for (const [roomName, users] of Object.entries(rooms)) {
      if (users.includes(socket.userId)) {
        // Ukloni odspojenog igrača iz sobe
        rooms[roomName] = users.filter((id) => id !== socket.userId);

        const currentGame = liveGames.find(
          (game) => game.roomName === roomName
        );

        if (rooms[roomName].length === 0) {
          // Ako nema više igrača, obriši sobu
          delete rooms[roomName];
          if (currentGame) {
            const gameIndex = liveGames.findIndex(
              (game) => game.roomName === roomName
            );
            if (gameIndex !== -1) {
              liveGames.splice(gameIndex, 1);
            }
          }
        } else {
          // Ako je ostao samo jedan igrač, osvježi podatke igre
          if (currentGame) {
            currentGame.players = currentGame.players.filter(
              (player) => player !== socket.userId
            );
          }
          // Emitiraj standardni događaj playerLeft
          io.to(roomName).emit("playerLeft", {
            message: "Igrač je napustio sobu.",
            remainingPlayers: currentGame ? currentGame.players : [],
          });
          // Ako u sobi ostane samo jedan igrač, automatski završi igru
          /*
        if (rooms[roomName].length === 1) {
          io.to(roomName).emit("gameEnded", {
            message: "Protivnik je napustio igru. Igra je završena.",
            winner: rooms[roomName][0]
          });
          // Opcionalno: nakon nekog vremena obriši sobu iz evidencije
          setTimeout(() => {
            delete rooms[roomName];
            const gameIndex = liveGames.findIndex(game => game.roomName === roomName);
            if (gameIndex !== -1) {
              liveGames.splice(gameIndex, 1);
            }
          }, 5000);
        }*/
        }
        break;
      }
    }

    console.log("Sve sobe nakon odspajanja:", rooms);
  });
};

module.exports = { handleSocket };
