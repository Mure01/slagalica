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
    <div>
      <BackOnTrack setGameName={props.setGameName} />
    <Timer points={0} setGameName={props.setGameName} gameName={"mojBroj"} roomName={window.location.pathname.split("/").pop()} socketId={socketId} />

      <div className='flex my-10 justify-center'>

      <Number number={mainNumber} />
      </div>
      <div className="flex rounded-lg border-sky-600 shadow-2xl items-start border-t-2 py-5 sm:py-0 sm:w-10/12 m-auto sm:items-center sm:justify-center">
        <div className='flex w-2/3 flex-wrap border-r-2 justify-center'>
        <div className='flex w-full justify-center sm:w-4/5 flex-wrap'> 

        {numbers.map((number, index) => (
          <div
          key={index}
          className={`sm:m-2 w-1/5 sm:w-fit text-center cursor-pointer ${
            clickedNumbers.includes(index) ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => handleNumberClick(number, index)}
        >
            <Number number={number} />
          </div>
        ))}
        </div>
        <div className='w-full flex items-center justify-center'>

        <div
  className={`m-2 w-2/5 sm:w-fit cursor-pointer ${
    clickedNumbers.includes("randomDoubleDigit") ? "cursor-not-allowed opacity-50" : ""
  }`}
  onClick={() => handleNumberClick(randomDoubleDigit, "randomDoubleDigit")}
>
  <Number number={randomDoubleDigit} />
</div>

<div
  className={`m-2 w-2/5 sm:w-fit cursor-pointer ${
    clickedNumbers.includes("extendedDigits") ? "cursor-not-allowed opacity-50" : ""
  }`}
  onClick={() => handleNumberClick(extendedDigits, "extendedDigits")}
>
  <Number number={extendedDigits} />
</div>

  </div>
        </div>
      <div className="flex w-1/3 justify-between sm:w-fit flex-wrap box-border px-2 sm:p-2">
        {['+', '-', '*', '/', '(', ')'].map((op) => (
          <button
          key={op}
          className="w-2/5 mb-2 sm:m-2 bg-sky-600 text-white rounded-md p-2"
          onClick={() => handleOperationClick(op)}
          >
            {op}
          </button>
        ))}
        <button
          className="w-2/5 sm:m-2 bg-red-600 text-white rounded-md p-2"
          onClick={handleClear}
          >
          C
        </button>
      </div>
          </div>
      <div className="flex justify-center w-10/12 space-x-2 m-auto mt-5">
      <p className="text-center w-3/4  shadow-2xl bg-sky-600 p-2 rounded-md m-auto text-white min-h-12 "> {currentExpression}</p>
      <p className="text-center shadow-2xl bg-sky-600 w-1/4 p-2  text-white rounded-md m-auto min-h-12 "> {result}</p>
        </div>
      <div className="flex justify-center w-10/12 space-x-2 m-auto mt-5">
      <button onClick={() => handleSubmit()} className="text-center mt-5 shadow-2xl bg-sky-600 w-full  p-2  text-white rounded-md mx-auto min-h-12 "> Potvrdi</button>
</div>

    </div>
  );
};

export default MojBroj;
