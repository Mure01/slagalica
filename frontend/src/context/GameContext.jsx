import React, { createContext, useContext, useState } from 'react';
import { io } from "socket.io-client";

const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [letters, setLetters] = useState([]);
  const [showAsocijacija, setShowAsocijacija] = useState(false);
  const [longestWord, setLongestWord] = useState('');
  const [socketId, setSocketId] = useState(null); // Lokacija za čuvanje ID-a
  const [playedGames, setPlayedGames] = useState(localStorage.getItem("playedGames") ? JSON.parse(localStorage.getItem("playedGames")) : []);
  socket.on("connected", ({id}) => {
    if(localStorage.getItem('id')){
      setSocketId(localStorage.getItem("id"));
    }else {
      setSocketId(id)
      localStorage.setItem("id", id);
    }
  });
  return (
    <GameContext.Provider value={{letters, showAsocijacija, setShowAsocijacija, playedGames, setPlayedGames, setLetters,socketId,setSocketId, longestWord, setLongestWord}}>
      {props.children}
    </GameContext.Provider>
  );
};

