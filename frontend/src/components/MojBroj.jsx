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
  <div className="min-h-screen px-4 mt-20">

  <BackOnTrack setGameName={props.setGameName} />
  <Timer
    points={0}
    setGameName={props.setGameName}
    gameName={"mojBroj"}
    roomName={window.location.pathname.split("/").pop()}
    socketId={socketId}
  />

  {/* MAIN NUMBER */}
  <div className="flex justify-center my-10">
    <div className="p-6 rounded-3xl bg-gradient-to-br text-white from-purple-600 to-indigo-700 shadow-[0_0_60px_rgba(99,102,241,0.7)]">
      {mainNumber}
    </div>
  </div>

  {/* GAME BOARD */}
  <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6">

    <div className="flex flex-col sm:flex-row gap-6">

      {/* NUMBERS */}
      <div className="flex-1 border-r border-white/20 pr-4">
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {numbers.map((number, index) => {
            const used = clickedNumbers.includes(index)

            return (
              <button
                key={index}
                disabled={used}
                onClick={() => handleNumberClick(number, index)}
                className={`
                  w-20 h-20 rounded-2xl text-white transition shadow-xl
                  ${
                    used
                      ? "bg-gray-500/40 text-gray-300 cursor-not-allowed"
                      : "bg-gradient-to-br from-sky-500 to-blue-700 hover:scale-110 active:scale-95"
                  }
                `}
              >
                {number}
              </button>
            )
          })}
        </div>

        {/* EXTRA NUMBERS */}
        <div className="flex justify-center gap-6">
          {[ 
            { val: randomDoubleDigit, key: "randomDoubleDigit" },
            { val: extendedDigits, key: "extendedDigits" }
          ].map(({ val, key }) => {
            const used = clickedNumbers.includes(key)

            return (
              <button
                key={key}
                disabled={used}
                onClick={() => handleNumberClick(val, key)}
                className={`
                  w-24 h-24 rounded-3xl text-white transition shadow-xl
                  ${
                    used
                      ? "bg-gray-500/40 cursor-not-allowed"
                      : "bg-gradient-to-br from-emerald-500 to-green-600 hover:scale-110 active:scale-95"
                  }
                `}
              >
                {val}
              </button>
            )
          })}
        </div>
      </div>

      {/* OPERATORS */}
      <div className="w-full sm:w-64 grid grid-cols-2 gap-4">
        {['+', '-', '*', '/', '(', ')'].map(op => (
          <button
            key={op}
            onClick={() => handleOperationClick(op)}
            className="h-16 text-2xl font-bold rounded-2xl bg-gradient-to-br from-fuchsia-600 to-pink-700 text-white shadow-xl hover:scale-110 active:scale-95 transition"
          >
            {op}
          </button>
        ))}

        <button
          onClick={handleClear}
          className="col-span-2 h-16 rounded-2xl bg-red-600 text-white font-bold shadow-xl hover:bg-red-700 transition"
        >
          ⛔ CLEAR
        </button>
      </div>

    </div>
  </div>

  {/* EXPRESSION + RESULT */}
  <div className="max-w-6xl mx-auto mt-6 flex gap-4">
    <div className="flex-1 min-h-16 bg-black/40 rounded-2xl p-4 text-white text-xl font-mono shadow-inner">
      {currentExpression || "Unesi izraz..."}
    </div>
    <div className="w-40 min-h-16 bg-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-extrabold text-white shadow-xl">
      {result}
    </div>
  </div>

  {/* CONFIRM */}
  <div className="max-w-6xl mx-auto mt-8">
    <button
      onClick={handleSubmit}
      className="w-full py-5 text-2xl font-extrabold uppercase rounded-full
      bg-gradient-to-r from-emerald-500 to-green-600
      shadow-[0_0_40px_rgba(16,185,129,0.8)]
      hover:scale-105 active:scale-95 transition"
    >
      🚀 POTVRDI RJEŠENJE
    </button>
  </div>
</div>

  );
};

export default MojBroj;
