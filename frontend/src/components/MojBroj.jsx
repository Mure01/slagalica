import React, { useContext, useEffect, useState } from 'react'
import { io } from "socket.io-client";
import { GameContext } from '../context/GameContext';
import Number from '../assets/Number';
import BackOnTrack from '../assets/BackOnTrack';
import Timer from './Timer';
const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera

const MojBroj = ({props}) => {
    const {socketId} = useContext(GameContext)
  const [numbers, setNumbers] = useState([]);
  const [clickedNumbers, setClickedNumbers] = useState([]);
  const [mainNumber, setMainNumber] = useState(0);
  const [extendedDigits, setExtendedDigits] = useState(0);
  const [randomDoubleDigit, setRandomDoubleDigit] = useState(0);
  const [currentExpression, setCurrentExpression] = useState('');
  const [result, setResult] = useState(0);

  useEffect(() => {
    const numbers = localStorage.getItem('singleDigits');
    const mainNumber = localStorage.getItem('mainNumber');
    const extendedDigits = localStorage.getItem('extendedDigits');
    const randomDoubleDigit = localStorage.getItem('randomDoubleDigit');
    setMainNumber(mainNumber);
    setExtendedDigits(extendedDigits);
    setRandomDoubleDigit(randomDoubleDigit);
    setNumbers(JSON.parse(numbers || '[]'));
  }, []);

  useEffect(() => {
    if (currentExpression) {
      try {
      const evaluatedResult = eval(currentExpression); // Paziti na sigurnost ako se korisnički unos ne kontroliše
        setResult(evaluatedResult);
        if(evaluatedResult == mainNumber) {
          const roomName = window.location.pathname.split("/").pop();
          socket.emit('gameConfirmed', {roomName, game: 'mojBroj', points: 25, socketId })
          props.setGameName('')
        }
      } catch {
        console.log('Invalid expression');
      }
    }
  }, [currentExpression]);

  const handleNumberClick = (number, index) => {
    if (!clickedNumbers.includes(index)) {
      setCurrentExpression((prev) => prev + number);
      setClickedNumbers((prev) => [...prev, index]);
    }
  };
  

  const handleOperationClick = (operation) => {
    setCurrentExpression((prev) => prev + operation);
  };

  const handleClear = () => {
    const updatedExpression = currentExpression.trim().match(/(\d+|\D)$/);
    
    if (updatedExpression) {
      const lastEntry = updatedExpression[0]; // Posljednji unos (broj ili operator)
  
      if (!isNaN(lastEntry)) {
        // Ako je broj, uklanjamo i iz clickedNumbers
        setClickedNumbers((prev) => prev.slice(0, -1));
      }
  
      // Ažuriraj izraz tako da ukloni posljednji broj ili operator
      setCurrentExpression(currentExpression.slice(0, -lastEntry.length));
    }
  
    setResult(0);
  };
  
  const handleSubmit = () => {
    if(mainNumber-result === 1) {
      const roomName = window.location.pathname.split("/").pop();
      socket.emit('gameConfirmed', {roomName, game: 'mojBroj', points: 20, socketId })
      props.setGameName('')
    }else if( mainNumber - result < 4) {
      const roomName = window.location.pathname.split("/").pop();
      socket.emit('gameConfirmed', {roomName, game: 'mojBroj', points: 15, socketId })
      props.setGameName('')
    }else if(mainNumber - result < 6){
      const roomName = window.location.pathname.split("/").pop();
      socket.emit('gameConfirmed', {roomName, game: 'mojBroj', points: 10, socketId })
      props.setGameName('')
    }else {
      const roomName = window.location.pathname.split("/").pop();
      socket.emit('gameConfirmed', {roomName, game: 'mojBroj', points: 0, socketId })
      props.setGameName('')
    }
  }

  return (
 <div className="min-h-screen px-3 sm:px-4 mt-16 sm:mt-20">
  <BackOnTrack setGameName={props.setGameName} />
  <Timer
    points={0}
    setGameName={props.setGameName}
    gameName={"mojBroj"}
    roomName={window.location.pathname.split("/").pop()}
    socketId={socketId}
  />

  {/* MAIN NUMBER */}
  <div className="flex justify-center my-6 sm:my-10">
    <div
      className="
        rounded-3xl bg-gradient-to-br text-white from-purple-600 to-indigo-700
        shadow-[0_0_60px_rgba(99,102,241,0.7)]
        px-6 py-4 sm:px-10 sm:py-6
        text-3xl sm:text-5xl font-extrabold tracking-widest
      "
    >
      {mainNumber}
    </div>
  </div>

  {/* GAME BOARD */}
  <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-4 sm:p-6">
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
      {/* NUMBERS */}
      <div className="flex-1 lg:border-r lg:border-white/20 lg:pr-6">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          {numbers.map((number, index) => {
            const used = clickedNumbers.includes(index);

            return (
              <button
                key={index}
                disabled={used}
                onClick={() => handleNumberClick(number, index)}
                className={`
                  rounded-2xl text-white transition shadow-xl font-extrabold
                  w-14 h-14 text-lg
                  sm:w-20 sm:h-20 sm:text-2xl
                  ${used
                    ? "bg-gray-500/40 text-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-br from-sky-500 to-blue-700 active:scale-95 sm:hover:scale-110"
                  }
                `}
              >
                {number}
              </button>
            );
          })}
        </div>

        {/* EXTRA NUMBERS */}
        <div className="flex justify-center gap-3 sm:gap-6">
          {[
            { val: randomDoubleDigit, key: "randomDoubleDigit" },
            { val: extendedDigits, key: "extendedDigits" },
          ].map(({ val, key }) => {
            const used = clickedNumbers.includes(key);

            return (
              <button
                key={key}
                disabled={used}
                onClick={() => handleNumberClick(val, key)}
                className={`
                  rounded-3xl text-white transition shadow-xl font-extrabold
                  w-16 h-16 text-lg
                  sm:w-24 sm:h-24 sm:text-2xl
                  ${used
                    ? "bg-gray-500/40 cursor-not-allowed"
                    : "bg-gradient-to-br from-emerald-500 to-green-600 active:scale-95 sm:hover:scale-110"
                  }
                `}
              >
                {val}
              </button>
            );
          })}
        </div>
      </div>

      {/* OPERATORS */}
      <div className="w-full lg:w-72">
        <div className="grid grid-cols-3 sm:grid-cols-2 gap-2 sm:gap-4">
          {["+", "-", "*", "/", "(", ")"].map((op) => (
            <button
              key={op}
              onClick={() => handleOperationClick(op)}
              className="
                rounded-2xl bg-gradient-to-br from-fuchsia-600 to-pink-700 text-white shadow-xl transition font-extrabold
                h-12 text-xl
                sm:h-16 sm:text-2xl
                active:scale-95 sm:hover:scale-110
              "
            >
              {op}
            </button>
          ))}

          <button
            onClick={handleClear}
            className="
              col-span-3 sm:col-span-2
              h-12 sm:h-16 rounded-2xl bg-red-600 text-white font-extrabold shadow-xl transition
              active:scale-95 sm:hover:bg-red-700
            "
          >
            ⛔ CLEAR
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* EXPRESSION + RESULT */}
  <div className="max-w-6xl mx-auto mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
    <div className="flex-1 min-h-14 sm:min-h-16 bg-black/40 rounded-2xl p-3 sm:p-4 text-white text-base sm:text-xl font-mono shadow-inner break-all">
      {currentExpression || "Unesi izraz..."}
    </div>
    <div className="w-full sm:w-40 min-h-14 sm:min-h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-xl sm:text-2xl font-extrabold text-white shadow-xl">
      {result}
    </div>
  </div>

  {/* CONFIRM */}
  <div className="max-w-6xl mx-auto mt-6 sm:mt-8">
    <button
      onClick={handleSubmit}
      className="
        w-full py-4 sm:py-5 text-lg sm:text-2xl font-extrabold uppercase rounded-full text-white
        bg-gradient-to-r from-emerald-500 to-green-600
        shadow-[0_0_40px_rgba(16,185,129,0.8)]
        transition active:scale-95 sm:hover:scale-105
      "
    >
      🚀 POTVRDI RJEŠENJE
    </button>
  </div>
</div>

  );
};

export default MojBroj;
