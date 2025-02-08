import React, { useEffect, useState } from "react";
import {io} from 'socket.io-client';
const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera

const Timer = ({ setGameName, points, gameName, socketId, roomName }) => {
  const [seconds, setSeconds] = useState(60);
  useEffect(() => {

    if(gameName === 'asocijacija') {
      setSeconds(150);
    }else if(gameName === 'kviz') {
      setSeconds(120);
    }else {
      setSeconds(60);
    }
  }, [])
    
  useEffect(() => {
    if (seconds <= 0) {
        socket.emit('gameConfirmed', {roomName, game: gameName, points: points, socketId })
        setGameName('');
      return; 
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // Čisti interval pri unmountu i resetu
  }, [seconds]); // Oslanja se na `seconds`

  return (
    <div className="bg-sky-600 text-white p-2 rounded-full absolute top-2 right-2">
      {seconds}
    </div>
  );
};

export default Timer;
