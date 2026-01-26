import React, { useEffect, useContext, useState } from 'react';
import BackOnTrack from '../assets/BackOnTrack';
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera
import { GameContext } from '../context/GameContext';
import Timer from './Timer';

const shuffleArray = (array) => {
  return array
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const Spojnice = ({ props }) => {
    const {socketId} = useContext(GameContext)
  
  const spojnica = JSON.parse(localStorage.getItem("spojnica"));
  const [leftSide, setLeftSide] = useState([]);
  const [rightSide, setRightSide] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [selectedRight, setSelectedRight] = useState(null);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const left = Object.keys(spojnica.parovi);
    const right = Object.values(spojnica.parovi);

    setLeftSide(shuffleArray(left));
    setRightSide(shuffleArray(right));
  }, []);
  
  const setSelected = (item, side) => {
    if(selectedItems.some((pair) => pair.left === item || pair.right === item)) return;


    if (side === "left") {
      setSelectedLeft(item);
    } else {
      if(!selectedLeft) return;
      setSelectedRight(item);
    }
  };

  useEffect(() => {
    if (selectedLeft && selectedRight) {
      checkAnswer();
    }
  }, [selectedRight]);

  const checkAnswer = () => {
    const isCorrect = spojnica.parovi[selectedLeft] === selectedRight;
    if(!isCorrect){
      setSelectedItems([...selectedItems, { left: selectedLeft, right: '', isCorrect }]);
    }
    else{
      setSelectedItems([...selectedItems, { left: selectedLeft, right: selectedRight, isCorrect }]);
    }
    setSelectedLeft(null);
    setSelectedRight(null);
  };

  useEffect(() => {
    if(selectedItems.length === 8) {
      const roomName = window.location.pathname.split("/").pop();
      const correctAnswers = selectedItems.filter((pair) => pair.isCorrect).length;
      const points = correctAnswers*2;
      socket.emit('gameConfirmed', {roomName, game: 'spojnice', points: points, socketId })
      props.setGameName('')
    }
  }, [selectedItems]);

  return (
 <>
  <BackOnTrack setGameName={props.setGameName} />
  <Timer
    points={0}
    setGameName={props.setGameName}
    gameName={"spojnice"}
    roomName={window.location.pathname.split("/").pop()}
    socketId={socketId}
  />

  <div className="min-h-[70vh] p-0 sm:px-4 mt-20">
    {/* MAIN WRAPPER */}
    <div className="w-full sm:max-w-5xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p- 1 sm:p-6 sm:p-10">

      {/* HEADER */}
      <div className="text-center mb-8">
        <h2 className="text-md  sm:text-4xl font-extrabold tracking-widest uppercase text-sky-600 drop-shadow">
          {spojnica.naziv}
        </h2>
      </div>

      {/* COLUMNS */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
        
        {/* LEFT */}
        <div className="bg-black/20 rounded-3xl border border-white/10 shadow-inner p-4 sm:p-6">
          <h3 className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 text-center">
            Lijevo
          </h3>

          <ul className="flex flex-col gap-3">
            {leftSide.map((item, index) => {
              const pair = selectedItems.find(p => p.left === item);

              const base =
                "w-full py-4 px-3 rounded-2xl text-center uppercase  text-sm sm:font-extrabold sm:tracking-wide transition shadow-xl select-none";

              const state = pair
                ? pair.isCorrect
                  ? "bg-gradient-to-r from-emerald-500 to-green-700 text-white shadow-[0_0_25px_rgba(16,185,129,0.6)]"
                  : "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_25px_rgba(220,38,38,0.55)]"
                : selectedLeft === item
                ? "bg-gradient-to-r from-fuchsia-600 to-pink-700 text-white shadow-[0_0_25px_rgba(236,72,153,0.55)]"
                : "bg-gradient-to-br from-sky-500 to-blue-700 text-white hover:scale-[1.02] active:scale-95";

              return (
                <li
                  key={index}
                  onClick={() => setSelected(item, "left")}
                  className={`${base} ${state}`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT */}
        <div className="bg-black/20 rounded-3xl border border-white/10 shadow-inner p-4 sm:p-6">
          <h3 className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4 text-center">
            Desno
          </h3>

          <ul className="flex flex-col gap-3">
            {rightSide.map((item, index) => {
              const pair = selectedItems.find(p => p.right === item);

              const base =
                "w-full py-4 px-3 rounded-2xl text-center uppercase text-sm  sm:font-extrabold sm:tracking-wide transition shadow-xl select-none";

              const state = pair
                ? pair.isCorrect
                  ? "bg-gradient-to-r from-emerald-500 to-green-700 text-white shadow-[0_0_25px_rgba(16,185,129,0.6)]"
                  : "bg-gradient-to-r from-red-600 to-rose-700 text-white shadow-[0_0_25px_rgba(220,38,38,0.55)]"
                : selectedRight === item
                ? "bg-gradient-to-r from-fuchsia-600 to-pink-700 text-white shadow-[0_0_25px_rgba(236,72,153,0.55)]"
                : "bg-gradient-to-br from-sky-500 to-blue-700 text-white hover:scale-[1.02] active:scale-95";

              return (
                <li
                  key={index}
                  onClick={() => setSelected(item, "right")}
                  className={`${base} ${state}`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* FOOTER TIP */}
      <div className="mt-8 text-center  text-sm">
        Pro tip: Aktivni odabir je <span className="text-pink-300 font-bold">pink glow</span> — onda klikneš par na drugoj strani.
      </div>
    </div>
  </div>
</>

  );
};

export default Spojnice;
