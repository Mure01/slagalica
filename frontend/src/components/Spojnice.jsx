import React, { useEffect, useContext, useState } from 'react';
import BackOnTrack from '../assets/BackOnTrack';
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera
import { GameContext } from '../context/GameContext';

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
    setSelectedItems([...selectedItems, { left: selectedLeft, right: selectedRight, isCorrect }]);
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
      <div>
        <h2 className="py-3 mb-3 uppercase text-center">{spojnica.naziv}</h2>
        <div className="flex justify-between w-10/12 m-auto">
          <ul className="flex flex-col space-y-3">
            {leftSide.map((item, index) => {
              const pair = selectedItems.find(p => p.left === item);
              return <li
                onClick={() => setSelected(item, "left")}
                className={`w-full p-2 text-center rounded-md uppercase ${
                  pair ? pair.isCorrect ? "bg-green-600 text-white" : "bg-red-600 text-white" :
                  selectedLeft === item ? "bg-green-600 text-white" : "bg-sky-600 text-white"
                }`}
                key={index}
              >
                {item}
              </li>
})}
          </ul>
          <ul className="flex flex-col space-y-3">
            {rightSide.map((item, index) => {
              const pair = selectedItems.find(p => p.right === item);
              return <li
                onClick={() => setSelected(item, "right")}
                className={`w-full p-2 text-center rounded-md uppercase ${
                  pair ? pair.isCorrect ? "bg-green-600 text-white" : "bg-red-600 text-white" :
                  selectedRight === item ? "bg-green-600 text-white" : "bg-sky-600 text-white"
                }`}
                key={index}
              >
                {item}
              </li>
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Spojnice;
