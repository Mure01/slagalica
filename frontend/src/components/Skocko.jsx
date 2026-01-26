import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { GameContext } from '../context/GameContext';
import BackOnTrack from "../assets/BackOnTrack";
import Timer from "./Timer";
const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera

const Skocko = ({ props }) => {
      const {socketId} = useContext(GameContext)

  const skocko = JSON.parse(localStorage.getItem("skocko"));
  const [polja, setPolja] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [feedback, setFeedback] = useState(
    Array(6).fill([0, 0, 0, 0]) 
  );
  const [showFeedback, setShowFeedback] = useState([false,false,false,false,false,false]);
  const [currentRow, setCurrentRow] = useState(0);
  const [currentPlace, setCurrentPlace] = useState(0);
  const calculatePoints = (feedbackRow) => {
    const redCount = feedbackRow.filter((color) => color === 2).length;
    const yellowCount = feedbackRow.filter((color) => color === 1).length;
  
    if (redCount === 4) {
      return 25; // Pobjeda
    }
    if (redCount + yellowCount > 0) {
      return 15; // Ima kombinaciju boja
    }
    return 0; // Nema boja
  };
  

  const handleChange = (num) => {
    if (currentPlace >= 4 || showFeedback[currentRow]) return; 
  
    const updatedPolja = [...polja];
    updatedPolja[currentRow][currentPlace] = num;
    setPolja(updatedPolja);
  
    setCurrentPlace(currentPlace + 1);
  };
  
  
  
  useEffect(() => {

    if (currentRow === 6) {
      console.log("Kraj igre");
      alert("Kraj igre");
    }
  }, [currentRow])

  const handleDelete = (r, k) => {
    const updatedPolja = [...polja];
    updatedPolja[r][k] = 0;
    setPolja(updatedPolja);
    if (r === currentRow) {
      setCurrentPlace(k);
    }
  }
  const handleNextRow = (rowIndex) => {
    if (rowIndex !== currentRow || currentPlace < 4) return; 
  
    const updatedPolja = [...polja];
    const rowFeedback = [0, 0, 0, 0];
    const usedIndexes = [];
  
    for (let i = 0; i < 4; i++) {
      if (updatedPolja[currentRow][i] === skocko[i]) {
        rowFeedback[i] = 2;
        usedIndexes.push(i);
      }
    }
  
    for (let i = 0; i < 4; i++) {
      if (
        rowFeedback[i] !== 2 &&
        skocko.includes(updatedPolja[currentRow][i]) &&
        !usedIndexes.includes(skocko.indexOf(updatedPolja[currentRow][i]))
      ) {
        rowFeedback[i] = 1; 
        usedIndexes.push(skocko.indexOf(updatedPolja[currentRow][i]));
      }
    }
  
    const newFeedback = [...feedback];
    newFeedback[currentRow] = rowFeedback;
    setFeedback(newFeedback);
    setShowFeedback(showFeedback.map((value, index) => index === currentRow ? true : value));
  
    if (JSON.stringify(updatedPolja[currentRow]) === JSON.stringify(skocko)) {
      const points = calculatePoints(rowFeedback);
      const roomName = window.location.pathname.split("/").pop();
      socket.emit("gameConfirmed", { roomName, game: "skocko", points, socketId });
      alert(`Pobjeda! Osvojili ste ${points} bodova.`);
      props.setGameName("");
      return;
    }
  
    if (currentRow < 5) {
      setTimeout(() => {
        setCurrentRow(currentRow + 1);
        setCurrentPlace(0);
      }, 1000);
    } else {
      const points = calculatePoints(rowFeedback);
      const roomName = window.location.pathname.split("/").pop();
      socket.emit("gameConfirmed", { roomName, game: "skocko", points, socketId });
      alert(`Kraj igre. Osvojili ste ${points} bodova.`);
      props.setGameName("");
    }
  };
  

  return (
   <>
  <BackOnTrack setGameName={props.setGameName} />
  <Timer
    points={0}
    setGameName={props.setGameName}
    gameName={"skocko"}
    roomName={window.location.pathname.split("/").pop()}
    socketId={socketId}
  />

  <div className="min-h-[70vh] sm:px-4 mt-20">
    {/* BOARD WRAPPER */}
    <div className="max-w-3xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-8">

      {/* TITLE / HINT */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase text-white drop-shadow">
          Skocko
        </h2>
      </div>

      {/* GRID */}
      <div className="w-full flex flex-col items-center gap-3">
        {polja.map((polje, indexr) => (
          <div
            key={indexr}
            className="w-full flex items-center gap-3"
          >
            {/* ROW CELLS */}
            <div className="flex-1 grid grid-cols-4 gap-2">
              {polje.map((number, indexk) => (
                <button
                  key={indexk}
                  onClick={() => number !== 0 && handleDelete(indexr, indexk)}
                  className={`
                    h-12 sm:h-14 rounded-2xl flex items-center justify-center
                    border border-white/15 shadow-xl transition
                    ${number === 0
                      ? "bg-white/10 hover:bg-white/15"
                      : "bg-gradient-to-br from-sky-500/70 to-blue-700/70 hover:scale-105 active:scale-95"
                    }
                  `}
                >
                  {number === 0 ? (
                    <div className="h-7 w-7 rounded-xl bg-white/20 border border-white/20 shadow-inner" />
                  ) : (
                    <img
                      className="h-9 sm:h-10 drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]"
                      src={"/" + number + ".jfif"}
                      alt={"ikonica-" + number}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* ACTION / FEEDBACK */}
            <div className="w-24 flex items-center justify-center">
              {!showFeedback[indexr] ? (
                <button
                  onClick={() => handleNextRow(indexr)}
                  className="h-12 w-12 rounded-full font-extrabold text-xl text-white
                    bg-gradient-to-br from-fuchsia-600 to-pink-700
                    shadow-[0_0_25px_rgba(236,72,153,0.55)]
                    hover:scale-110 active:scale-95 transition"
                >
                  ?
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-2 p-2 rounded-2xl bg-black/30 border border-white/10 shadow-inner">
                  {feedback[indexr].map((color, i) => (
                    <span
                      key={i}
                      className={`
                        h-4 w-4 rounded-full shadow
                        ${color === 2
                          ? "bg-red-600 shadow-[0_0_12px_rgba(220,38,38,0.8)]"
                          : color === 1
                          ? "bg-yellow-400 shadow-[0_0_12px_rgba(250,204,21,0.8)]"
                          : "bg-gray-300/60"
                        }
                      `}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* PICKER */}
    <div className="max-w-3xl mx-auto mt-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-4 sm:p-6">
      <div className="flex items-center justify-between gap-3 flex-wrap sm:flex-nowrap">
        {[1, 2, 3, 4, 5, 6].map((number, index) => (
          <button
            key={index}
            onClick={() => handleChange(number)}
            className="flex-1 sm:min-w-[90px] h-16 sm:h-20 rounded-md
              border border-white/15 shadow-xl
              hover:scale-105 active:scale-95 transition
              flex items-center justify-center"
          >
            <img
              className="h-10 sm:h-12 drop-shadow-[0_8px_14px_rgba(0,0,0,0.4)]"
              src={"/" + number + ".jfif"}
              alt={"picker-" + number}
            />
          </button>
        ))}
      </div>

      <div className="text-center  mt-4 text-sm">
        Tip: Biraj pametno — feedback ti govori koliko je ikona tačno i na pravoj poziciji 😉
      </div>
    </div>
  </div>
</>

  );
};

export default Skocko;
