import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import Spojnice from "../components/Spojnice";
import MojBroj from "../components/MojBroj";
import Kviz from "../components/Kviz";
import Skocko from "../components/Skocko";
import Slagalica from "../components/Slagalica";
import Asocijacija from "../components/Asocijacija";
import { GameContext } from "../context/GameContext";
import CircleLoader from 'react-spinners/CircleLoader'
import GamePage from "../components/GamePage";
const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera

const Game = () => {
  const [status, setStatus] = useState("");
  const [slagalicaPoints, setSlagalicaPoints] = useState(0);
  const [enemySlagalicaPoints, setEnemySlagalicaPoints] = useState(0);

  const [mojBrojPoints, setMojBrojPoints] = useState(0);
  const [enemyMojBrojPoints, setEnemyMojBrojPoints] = useState(0);

  const [skockoPoints, setSkockoPoints] = useState(0);
  const [enemySkockoPoints, setEnemySkockoPoints] = useState(0);

  const [spojnicePoints, setSpojnicePoints] = useState(0);
  const [enemySpojnicePoints, setEnemySpojnicePoints] = useState(0);

  const [kvizPoints, setKvizPoints] = useState(0);
  const [enemyKvizPoints, setEnemyKvizPoints] = useState(0);

  const [asocijacijaPoints, setAscojacijaPoints] = useState(0);
  const [enemyAsocijacijaPoints, setEnemyAsocijacijaPoints] = useState(0);
  const [gameReady, setGameReady] = useState(false);
  const [gameName, setGameName] = useState("");
  const {
    letters,
    setLetters,
    socketId,
    setSocketId,
    longestWord,
    setLongestWord,
    playedGames,
    setPlayedGames
  } = useContext(GameContext);
  const updatePoints = (points) => {
    localStorage.setItem("points", JSON.stringify(points));
    if (points[socketId]) {
      setSlagalicaPoints(points[socketId].slagalica || 0);
      setMojBrojPoints(points[socketId].mojBroj || 0);
      setSkockoPoints(points[socketId].skocko || 0);
      setSpojnicePoints(points[socketId].spojnice || 0);
      setKvizPoints(points[socketId].kviz || 0);
      setAscojacijaPoints(points[socketId].asocijacija || 0);
    }
    const enemyPlayer = localStorage.getItem("enemyPlayer");
    if (points[enemyPlayer]) {
      setEnemySlagalicaPoints(points[enemyPlayer].slagalica || 0);
      setEnemyMojBrojPoints(points[enemyPlayer].mojBroj || 0);
      setEnemySkockoPoints(points[enemyPlayer].skocko || 0);
      setEnemySpojnicePoints(points[enemyPlayer].spojnice || 0);
      setEnemyKvizPoints(points[enemyPlayer].kviz || 0);
      setEnemyAsocijacijaPoints(points[enemyPlayer].asocijacija || 0);
    }
  }
  useEffect(() => {
    // Sačuvaj ID korisnika kada se poveže
    const gameId = window.location.pathname.split("/").pop();
    // Izvuci `gameId` iz URL-a
    if (!gameId) {
      setStatus("Neispravan link.");
      return;
    }
    const storedSocketId = localStorage.getItem("id");
    // Provjeri je li stranica refreshana
    if (storedSocketId && letters) {
      setSocketId(storedSocketId);
      socket.emit("refresh", { roomNameGet: gameId, id: storedSocketId });
    }
    const storedLetters = localStorage.getItem("letters");
    const storedLongestWord = localStorage.getItem("longestWord");
    if (storedLetters && storedLongestWord) {
      // Učitaj podatke iz localStorage-a nakon refresh-a
      setLetters(JSON.parse(storedLetters));
      setLongestWord(storedLongestWord);
      let points = JSON.parse(localStorage.getItem("points"));
      if (points) {
        updatePoints(points);
      }
    }

    socket.emit("joinRoom", { roomName: gameId, id: socketId });
    socket.on("roomJoined", ({ roomName, id }) => {
      if (socketId) {
        socket.emit("gameLink", { roomName, id: socketId });
      } else {
        localStorage.setItem("id", id);
        setSocketId(id);
        socket.emit("gameLink", { roomName, id });
      }
    });
    // Emituj događaj za pridruživanje sobi
    socket.on("roomJoinedRefresh", ({ roomName, currentRoom }) => {
      if (currentRoom.players.length === 2) {
        setStatus("Soba spremna! Igra može početi.");
        console.log("Soba refreshovana")
        setLetters(currentRoom.letters);
        setLongestWord(currentRoom.longestWord);
      } else {
        setStatus("Čekanje protivnika...");
      }
    });
    // Obradi kada je soba spremna
    socket.on("roomReady", ({ letters, longestWordSend,
      mainNumber,
      singleDigits,
      extendedDigits,
      randomDoubleDigit,
      skocko,
      spojnica,
      asocijacija,
      players }) => {
      setStatus("Soba spremna! Igra može početi.");
      setGameReady(true);
      setLetters(letters);
      setLongestWord(longestWordSend);
        localStorage.setItem("mainNumber", mainNumber);
        localStorage.setItem("singleDigits", JSON.stringify(singleDigits));
        localStorage.setItem("extendedDigits", extendedDigits);
        localStorage.setItem("randomDoubleDigit", randomDoubleDigit);
        localStorage.setItem(
        "enemyPlayer",
        players.find((player) => player !== socketId)
      );
      localStorage.setItem('skocko', JSON.stringify(skocko))
      localStorage.setItem("letters", JSON.stringify(letters));
      localStorage.setItem("longestWord", longestWordSend);
      localStorage.setItem("spojnica", JSON.stringify(spojnica));
      localStorage.setItem("asocijacija", JSON.stringify(asocijacija));
      console.log("Soba spremna roomReady");
    });

    socket.on("pointsUpdated", ({ points }) => {
      console.log(points)
      updatePoints(points);
    });

    // Obradi kada drugi igrač napusti sobu
    socket.on("playerLeft", (data) => {
      setStatus("Protivnik je napustio sobu.");
    });
    socket.on("fullRoom", () => {
      setStatus("Soba je popunjena kreirajte novu igru sa prijateljem!");
    });
    socket.on("roomClosed", ({ message }) => {
      setStatus(message);
    });

    // Očisti eventove kada komponenta bude uništena
    return () => {
      socket.off("connect");
      socket.off("roomReady");
      socket.off("playerLeft");
      socket.off("roomJoined");
      socket.off("roomJoinedRefresh");
      socket.off("fullRoom");
      socket.off("roomClosed");
      socket.off("pointsUpdated");
    };
  }, [socketId]);

  if (socketId) {
    const gameId = window.location.pathname.split("/").pop();
    if (!gameId) {
      setStatus("Neispravan link.");
      return;
    }
  }
  const renderGame = () => {
    switch (gameName) {
      case "Slagalica":
        return <Slagalica props={{ letters, longestWord, setGameName }} />;
      case "MojBroj":
        return <MojBroj props={{setGameName}} />;
      case "Skocko":
        return <Skocko props={{setGameName}} />;
      case "Spojnice":
        return <Spojnice props ={{setGameName}} />;
      case "Kviz":
        return <Kviz />;
      case "Asocijacije":
        return <Asocijacija props={{setGameName}} />;
      default:
        return null;
    }
  };
  return (
    <>
    {
      !gameReady ? <div className="flex flex-col justify-center items-center h-screen">
        <CircleLoader/>
        <p className="pt-4">Molimo sacekajte da se protivnik pridruzi</p>
        </div> :
      <>
      <div className="flex justify-between py-3 px-3">
        <p  className="text-center w-full uppercase text-xl">{gameName}</p>
      </div>
      <GamePage
        props={{
          setGameName,
          gameName,
          renderGame,
          slagalicaPoints,
          mojBrojPoints,
          skockoPoints,
          spojnicePoints,
          kvizPoints,
          asocijacijaPoints,
          enemySlagalicaPoints,
          enemyMojBrojPoints,
          enemySkockoPoints,
          enemySpojnicePoints,
          enemyKvizPoints,
          enemyAsocijacijaPoints,
          playedGames,
          setPlayedGames
        }}
      />
      </>
}
    </>
  );
};

export default Game;
