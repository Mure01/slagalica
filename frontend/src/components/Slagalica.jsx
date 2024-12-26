import React, { useContext, useEffect, useState } from 'react'
import { io } from "socket.io-client";
import { GameContext } from '../context/GameContext';
const socket = io("http://localhost:3000"); // URL backend servera

const Slagalica = ({props}) => {
  const {socketId} = useContext(GameContext)
  const [word,setWord] = useState('')
  const [isValid, setIsValid] = useState(false)
  const [status, setStatus] = useState('')
  const changeWord = (l) => {
    setWord(prevWord => (prevWord+l))
   
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

  return (
    <>
    <button className='bg-red-600 p-3 text-white uppercase cursor-pointer' onClick={() => goBack()}> <i className='fa fa-arrow-left'></i> back</button>
    <div>Slagalica, {props.longestWord}</div>
    <p className='border-b w-10/12 m-auto pb-2 border-black text-center' >{word}</p>
    <p className={ isValid ? 'bg-green-700 text-center w-10/12 m-auto text-white uppercase my-4' : 'bg-red-600 text-center w-10/12 m-auto uppercase text-white my-4'}>{status}</p>
    <div className='flex items-center flex-wrap m-auto w-10/12 justify-around'>
    {
      props.letters.map((letter, index) => {
    return<>
         <p key={index} onClick={() => changeWord(letter)} className='text-2xl w-fit bg-sky-600 px-5 py-2 rounded-md text-white'>{letter}</p>
        </>
      })
    }

    </div>
    <div className='w-full py-10 flex items-center'>
      <button onClick={() => confirmWord()} className='w-fit m-auto bg-sky-600 text-white px-3 py-1 rounded-md'>Potvrdi rijec</button>
    </div>
    </>
  )
}

export default Slagalica