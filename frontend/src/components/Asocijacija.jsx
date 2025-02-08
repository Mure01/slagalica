import React, { useState, useContext,useEffect, useRef } from "react";
import BackOnTrack from "../assets/BackOnTrack";
import { io } from "socket.io-client";
import { GameContext } from '../context/GameContext';
import Timer from "./Timer";
const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera

const Asocijacija = ({ props }) => {
  const asocijacija = JSON.parse(localStorage.getItem("asocijacija"));
  const {socketId} = useContext(GameContext)
  const [poljeA, setPoljeA] = useState(Object.values(asocijacija.A));
  const [poljeB, setPoljeB] = useState(Object.values(asocijacija.B));
  const [poljeC, setPoljeC] = useState(Object.values(asocijacija.C));
  const [poljeD, setPoljeD] = useState(Object.values(asocijacija.D));
  const [selected, setSelected] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState("");
  const [rjesenje, setRjesenje] = useState("");
  const [greskaRjesenja, setGreskaRjesenja] = useState('');
  const [tacnaRjesenja, setTacnaRjesenja] = useState([]);
  const showItem = (item) => {
    setSelected([...selected, item]);
  };
  const inputRef = useRef(null)
  useEffect(() => {
    if (selectedPlace) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100); 
    }
  }, [selectedPlace]);

  const checkAnswer = () => {
    if (selectedPlace === "A") {
      if (rjesenje.toUpperCase() === asocijacija.A.rjesenje) {
        setTacnaRjesenja([...tacnaRjesenja, rjesenje.toUpperCase()]);
        setSelectedPlace("");
        setRjesenje("");
        setGreskaRjesenja('');
      } else {
        setGreskaRjesenja('Pogresan odgovor, pokusaj ponovo!');
      }
    } else if (selectedPlace === "B") {
      if (rjesenje.toUpperCase() === asocijacija.B.rjesenje) {
        setTacnaRjesenja([...tacnaRjesenja, rjesenje.toUpperCase()]);
        setSelectedPlace("");
        setRjesenje("");
        setGreskaRjesenja('');

      } else {
        setGreskaRjesenja('Pogresan odgovor, pokusaj ponovo!');
      }
    } else if (selectedPlace === "C") {
      if (rjesenje.toUpperCase() == asocijacija.C.rjesenje) {
        setTacnaRjesenja([...tacnaRjesenja, rjesenje.toUpperCase()]);
        setSelectedPlace("");
        setRjesenje("");
        setGreskaRjesenja('');

      } else {
        setGreskaRjesenja('Pogresan odgovor, pokusaj ponovo!');
      }
    } else if (selectedPlace === "D") {
      if (rjesenje.toUpperCase() === asocijacija.D.rjesenje) {
        setTacnaRjesenja([...tacnaRjesenja, rjesenje.toUpperCase()]);
        setSelectedPlace("");
        setRjesenje("");
        setGreskaRjesenja('');

      } else {
        setGreskaRjesenja('Pogresan odgovor, pokusaj ponovo!');
      }
    } else if (selectedPlace === "konacno") {
      if (rjesenje.toUpperCase() === asocijacija.glavno_rjesenje) {
    const roomName = window.location.pathname.split("/").pop();
        if(
          tacnaRjesenja.length === 4 
        ) {
          socket.emit('gameConfirmed', {roomName, game: 'asocijacija', points: 16, socketId })
          props.setGameName('')
        }
        else if(tacnaRjesenja.length === 3) {
          socket.emit('gameConfirmed', {roomName, game: 'asocijacija', points: 20, socketId })
          props.setGameName('')
        }
        else if(tacnaRjesenja.length===2) {
          socket.emit('gameConfirmed', {roomName, game: 'asocijacija', points: 24, socketId })
          props.setGameName('')
        }
        else {
          socket.emit('gameConfirmed', {roomName, game: 'asocijacija', points: 30, socketId })
          props.setGameName('')
        }
      } else {
        setGreskaRjesenja('Pogresan odgovor, pokusaj ponovo!');
      }
    } else {
      alert("Izaberite mjesto");
    }
  };
  return (
    <>
      <BackOnTrack setGameName={props.setGameName} />
    <Timer points={0} setGameName={props.setGameName} gameName={"asocijacija"} roomName={window.location.pathname.split("/").pop()} socketId={socketId} />

      {selectedPlace && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 space-y-3 flex-col w-1/2 z-10 flex justify-center items-center bg-sky-600 py-4 rounded-md text-white text-center">
          <p>Rjesenje za : {selectedPlace}</p>
          <input
            onChange={(e) => setRjesenje(e.target.value)}
            className="text-black"
            value={rjesenje}
            ref={inputRef}
            type="text"
          ></input>
          <p className="text-red-600">{greskaRjesenja}</p>
          <div className="flex w-1/2  justify-between">
            <button
              onClick={() => {setSelectedPlace("") ; setRjesenje(""); setGreskaRjesenja('')} }
              className="bg-red-500 text-white rounded-md px-2"
            >
              Odustani
            </button>
            <button
              onClick={() => checkAnswer()}
              className="bg-green-500 text-white rounded-md px-2"
            >
              Potvrdi
            </button>
          </div>
        </div>
      )}

      <div className="w-11/12 mt-20 sm:mt-5 m-auto">
        <div className="flex justify-between w-full sm:w-10/12 m-auto items-start">
          <div className="flex w-1/2 p-2 flex-col space-y-2">
            {poljeA.map((item, index) => {
              if (index < 4) {
                return (
                  <div
                    onClick={() => showItem(item)}
                    className={`bg-sky-600 p-1 rounded-md text-white text-center cursor-pointer`}
                    key={index}
                  >
                    { tacnaRjesenja.includes(asocijacija.A.rjesenje) ? item : selected.includes(item) ? item : "A" + (index + 1)}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`rounded-md p-1 min-w-24 text-white text-center ${
                      tacnaRjesenja.includes(asocijacija.A.rjesenje)
                        ? "bg-green-600"
                        : "bg-sky-600"
                    } `}
                    key={index}
                    onClick={() => setSelectedPlace("A")}
                  >
                    {tacnaRjesenja.includes(asocijacija.A.rjesenje)
                      ? asocijacija.A.rjesenje
                      : "A"}
                  </div>
                );
              }
            })}
          </div>
          <div className="flex w-1/2 p-2 flex-col space-y-2">
            {poljeB.map((item, index) => {
              if (index < 4) {
                return (
                  <div
                    onClick={() => showItem(item)}
                    className={`bg-sky-600 p-1 rounded-md text-white text-center cursor-pointer`}
                    key={index}
                  >
                    { tacnaRjesenja.includes(asocijacija.B.rjesenje) ? item : selected.includes(item) ? item : "B" + (index + 1)}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`rounded-md min-w-24 p-1 text-white text-center ${
                      tacnaRjesenja.includes(asocijacija.B.rjesenje)
                        ? "bg-green-600"
                        : "bg-sky-600"
                    } `}
                    key={index}
                    onClick={() => setSelectedPlace("B")}
                  >
                    {tacnaRjesenja.includes(asocijacija.B.rjesenje)
                      ? asocijacija.B.rjesenje
                      : "B"}
                  </div>
                );
              }
            })}
          </div>
        </div>
        <div className="w-full my-4 flex justify-center items-center">
              <p onClick={() => setSelectedPlace('konacno')} className="bg-sky-600 text-white min-w-[50%] p-1 text-center rounded-md">? ? ?</p>
        </div>

        <div className="flex justify-between w-full sm:w-10/12 m-auto items-start">
          <div className="flex w-1/2 p-2 flex-col space-y-2">
            {poljeC.map((item, index) => {
              if (index < 4) {
                return (
                  <div
                    onClick={() => showItem(item)}
                    className={`bg-sky-600 p-1 rounded-md text-white text-center cursor-pointer`}
                    key={index}
                  >
                    { tacnaRjesenja.includes(asocijacija.C.rjesenje) ? item : selected.includes(item) ? item : "C" + (index + 1)}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`rounded-md p-1 min-w-24 text-white text-center ${
                      tacnaRjesenja.includes(asocijacija.C.rjesenje)
                        ? "bg-green-600"
                        : "bg-sky-600"
                    } `}
                    key={index}
                    onClick={() => setSelectedPlace("C")}
                  >
                    {tacnaRjesenja.includes(asocijacija.C.rjesenje)
                      ? asocijacija.C.rjesenje
                      : "C"}
                  </div>
                );
              }
            })}
          </div>
          <div className="flex w-1/2 p-2 flex-col space-y-2">
            {poljeD.map((item, index) => {
              if (index < 4) {
                return (
                  <div
                    onClick={() => showItem(item)}
                    className={`bg-sky-600 p-1 rounded-md text-white text-center cursor-pointer`}
                    key={index}
                  >
                    { tacnaRjesenja.includes(asocijacija.D.rjesenje) ? item : selected.includes(item) ? item : "D" + (index + 1)}
                  </div>
                );
              } else {
                return (
                  <div
                  className={`rounded-md p-1 min-w-24 text-white text-center ${
                    tacnaRjesenja.includes(asocijacija.D.rjesenje)
                      ? "bg-green-600"
                      : "bg-sky-600"
                  } `}
                  key={index}
                  onClick={() => setSelectedPlace("D")}
                >
                  {tacnaRjesenja.includes(asocijacija.D.rjesenje)
                    ? asocijacija.D.rjesenje
                    : "D"}
                </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Asocijacija;
