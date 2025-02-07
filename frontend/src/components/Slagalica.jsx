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
    <BackOnTrack setGameName={props.setGameName}/>
    <Timer points={0} setGameName={props.setGameName} gameName={"slagalica"} roomName={window.location.pathname.split("/").pop()} socketId={socketId} />
   <div className='min-h-[50vh] flex flex-col items-center mt-28'> 

    <div className='flex items-center space-x-2 justify-between w-10/12 m-auto'>

    <p className='border-b w-10/12 m-auto pb-2 border-black text-center' >{word}</p>
    <button onClick={() => deleteLastLetter()} className='bg-red-600 text-white p-2 rounded-md'>{'<-'}</button>
    </div>
    <p className={ isValid ? 'bg-green-700 text-center w-10/12 m-auto text-white uppercase my-4' : 'bg-red-600 text-center w-10/12 m-auto uppercase text-white my-4'}>{status}</p>
    <div className='flex items-center flex-wrap m-auto w-10/12 justify-around'>
    {
      props.letters.map((letter, index) => {
        return<>
         <p key={index} onClick={ usedLetters.includes(index) ? '' : () => changeWord(letter, index)} className={`text-2xl mb-4 w-fit ${usedLetters.includes(index) ? 'bg-sky-400' : 'bg-sky-600'} px-5 py-2 rounded-md text-white `}>{letter}</p>
        </>
      })
    }

    </div>
    <div className='w-full py-10 flex items-center'>
      <button onClick={() => confirmWord()} className='w-fit m-auto bg-sky-600 text-white p-3 rounded-md'>Potvrdi rijec</button>
    </div>
    </div>
    </>
  )
}

export default Slagalica