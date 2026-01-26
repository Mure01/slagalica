import React, { useContext, useEffect, useState } from 'react'
import { io } from "socket.io-client";
import { GameContext } from '../context/GameContext';
import BackOnTrack from '../assets/BackOnTrack';
import Timer from './Timer';
const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera

const Slagalica = ({props}) => {
  const {socketId} = useContext(GameContext)
  const [word,setWord] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [status, setStatus] = useState('')
  const [usedLetters, setUsedLetters] = useState([])
  const changeWord = (l, i) => {
    setWord(prevWord => (prevWord+l))
    setUsedLetters([...usedLetters, i])
   
  }
  const goBack  = () => {
    props.setGameName('')
  }
  useEffect(() => {
    socket.emit('isValidWord', {word})
    socket.on('validTrue', ({valid}) => {
      console.log("ValidTrue")
      if(valid) {
        setStatus("Rijec postoji")
        setIsValid(true)
      }else {
        setIsValid(false)
        setStatus("Rijec ne postoji")
      }
    })
  }, [word])

  const confirmWord = () => {
    if(isValid){
    const roomName = window.location.pathname.split("/").pop();
      if(word.length > props.longestWord.length){
        socket.emit('gameConfirmed', {roomName, game: 'slagalica', points: 25, socketId })
        props.setGameName('')
      }else if(word.length === props.longestWord.length){
        socket.emit('gameConfirmed', {roomName, game: 'slagalica', points: 20, socketId })
        props.setGameName('')
      }else if((props.longestWord.length - word.length) < 3){
        socket.emit('gameConfirmed', {roomName, game: 'slagalica', points: 15, socketId })
        props.setGameName('')
      }else{
        socket.emit('gameConfirmed', {roomName, game: 'slagalica', points: 10, socketId })
        props.setGameName('')
      }
    }else {
      socket.emit('gameConfirmed', {roomName, game: 'slagalica', points:0, socketId })
      props.setGameName('')
    }
     
    }
    const deleteLastLetter = () => {
      setWord(prevWord => prevWord.slice(0, -1))
      setUsedLetters(usedLetters.slice(0, -1))
    }
  return (
  <>
  <BackOnTrack setGameName={props.setGameName} />
  <Timer
    points={0}
    setGameName={props.setGameName}
    gameName={"slagalica"}
    roomName={window.location.pathname.split("/").pop()}
    socketId={socketId}
  />

  <div className="min-h-[60vh] flex flex-col items-center mt-24 px-4">

    {/* GLAVNI CARD */}
    <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">

      {/* RIJEC + DELETE */}
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 text-center sm:text-4xl font-extrabold tracking-widest uppercase py-4 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg">
          {word || "— — — —"}
        </div>

        <button
          onClick={deleteLastLetter}
          className="h-16 w-16 flex items-center justify-center rounded-2xl bg-red-600 hover:bg-red-700 active:scale-95 transition text-white text-2xl font-bold shadow-lg"
        >
          ⌫
        </button>
      </div>

      {/* STATUS */}
      <div
        className={`text-center text-lg font-bold uppercase py-3 rounded-xl mb-8 tracking-wide shadow-md
          ${
            isValid
              ? "bg-green-600/90 text-white "
              : "bg-red-600/90 text-white"
          }
        `}
      >
        {status}
      </div>

      {/* SLOVA */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {props.letters.map((letter, index) => {
          const used = usedLetters.includes(index)

          return (
            <button
              key={index}
              disabled={used}
              onClick={() => changeWord(letter, index)}
              className={`
                w-8 h-9
                sm:w-16 sm:h-16 text-2xl font-extrabold uppercase rounded-md shadow-lg transition
                ${
                  used
                    ? "bg-gray-500/50 text-gray-300 cursor-not-allowed"
                    : "bg-gradient-to-br from-sky-500 to-blue-700 text-white hover:scale-110 hover:rotate-3 active:scale-95"
                }
              `}
            >
              {letter}
            </button>
          )
        })}
      </div>

      {/* CONFIRM BUTTON */}
      <div className="flex justify-center">
        <button
          onClick={confirmWord}
          className="px-3 sm:px-12 py-4 text-xl font-extrabold uppercase rounded-full
            bg-gradient-to-r from-emerald-500 to-green-600
            text-white shadow-2xl
            hover:scale-105 active:scale-95 transition
            tracking-wide"
        >
          ✅ Potvrdi riječ
        </button>
      </div>
    </div>
  </div>
</>

  )
}

export default Slagalica