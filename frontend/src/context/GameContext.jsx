import React, { createContext, useContext, useState } from 'react';
import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // URL backend servera

export const GameContext = createContext();

export const GameProvider = (props) => {
  const [letters, setLetters] = useState([]);
  const [longestWord, setLongestWord] = useState('');
  const [socketId, setSocketId] = useState(null); // Lokacija za čuvanje ID-a
  
  socket.on("connected", ({id}) => {
    if(localStorage.getItem('id')){
      setSocketId(localStorage.getItem("id"));
    }else {
      setSocketId(id)
    }
  });
  return (
    <GameContext.Provider value={{letters, setLetters,socketId,setSocketId, longestWord, setLongestWord}}>
      {props.children}
    </GameContext.Provider>
  );
};

