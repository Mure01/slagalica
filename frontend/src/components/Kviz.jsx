import React, { useContext, useState } from 'react'
import BackOnTrack from '../assets/BackOnTrack';
import Timer from './Timer';
import { GameContext } from '../context/GameContext';
import { io } from 'socket.io-client';

const socket = io(import.meta.env.VITE_BACKEND_URL);

const Kviz = ({ props }) => {
  const { socketId } = useContext(GameContext);
  const kviz = JSON.parse(localStorage.getItem("kviz"));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Index kliknutog odgovora
  const [showFeedback, setShowFeedback] = useState(false); // Da li prikazati boje odgovora
  const roomName = window.location.pathname.split("/").pop();

  const checkAnswer = (i) => {
    const correctAnswer = kviz[currentQuestion].tacanOdgovor;
    const playerAnswer = kviz[currentQuestion].odgovori[i];

    setSelectedAnswer(i); // Postavi kliknut odgovor
    setShowFeedback(true); // Prikaži boje odgovora

    if (correctAnswer === playerAnswer) {
      setPoints((prevPoints) => prevPoints + 3);
    }

    setTimeout(() => {
      setShowFeedback(false); // Sakrij boje odgovora
      setSelectedAnswer(null); // Resetuj kliknut odgovor

      if (currentQuestion + 1 === kviz.length) {
        socket.emit('gameConfirmed', { roomName, game: 'kviz', points, socketId });
        props.setGameName('');
      } else {
        setCurrentQuestion((prev) => prev + 1);
      }
    }, 2000); // Čekaj 3 sekunde prije prelaska
  };

  return (
    <>
      <BackOnTrack setGameName={props.setGameName} />
      <Timer setGameName={props.setGameName} gameName={'kviz'} socketId={socketId} roomName={roomName} points={points} />

      <div className='mt-20'>
        <div>
          {kviz.map((pitanje, index) => {
            if (index === currentQuestion) {
              return (
                <div key={index}>
                  <p className='w-11/12 m-auto rounded-md mb-5 p-2 bg-sky-600 text-white text-center'>{pitanje.pitanje}</p>
                  <div className='flex flex-wrap'>
                    {pitanje.odgovori.map((odgovor, i) => {
                      let bgColor = 'bg-sky-600'; // Default boja
                      if (showFeedback) {
                        if (i === selectedAnswer) {
                          bgColor = odgovor === kviz[currentQuestion].tacanOdgovor ? 'bg-green-500' : 'bg-red-500';
                        } else if (odgovor === kviz[currentQuestion].tacanOdgovor) {
                          bgColor = 'bg-green-500';
                        }
                      }

                      return (
                        <div className='w-1/2 p-1' key={i}>
                          <button
                            className={`${bgColor} text-white w-full rounded-md py-2`}
                            onClick={() => !showFeedback && checkAnswer(i)} // Sprječava višestruke klikove
                          >
                            {odgovor}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
      <p className='p-4 text-center mt-4'> Bodovi: {points} </p>
    </>
  );
};

export default Kviz;
