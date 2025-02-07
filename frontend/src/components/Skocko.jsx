import React, { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { GameContext } from '../context/GameContext';
import BackOnTrack from "../assets/BackOnTrack";
import Timer from "./Timer";
const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera

const Skocko = ({ props }) => {
      const {socketId} = useContext(GameContext)

  const skocko = JSON.parse(localStorage.getItem("skocko"));
  const [polja, setPolja] = useState([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [feedback, setFeedback] = useState(
    Array(6).fill([0, 0, 0, 0]) 
  );
  
  const [currentRow, setCurrentRow] = useState(0);
  const [currentPlace, setCurrentPlace] = useState(0);
  const calculatePoints = (feedbackRow) => {
    const redCount = feedbackRow.filter((color) => color === 2).length;
    const yellowCount = feedbackRow.filter((color) => color === 1).length;
  
    if (redCount === 4) {
      return 25; // Pobjeda
    }
    if (redCount + yellowCount > 0) {
      return 15; // Ima kombinaciju boja
    }
    return 0; // Nema boja
  };
  

  const handleChange = (num) => {
    const updatedPolja = [...polja];
    updatedPolja[currentRow][currentPlace] = num;
    setPolja(updatedPolja);
    setCurrentPlace(currentPlace + 1);
  
    if (currentPlace === 3) {
      const newFeedback = [...feedback];
      const rowFeedback = [0, 0, 0, 0];
      const usedIndexes = [];
  
      for (let i = 0; i < 4; i++) {
        if (polja[currentRow][i] === skocko[i]) {
          rowFeedback[i] = 2; // Crvena (tačna pozicija)
          usedIndexes.push(i);
        }
      }
      for (let i = 0; i < 4; i++) {
        if (
          rowFeedback[i] !== 2 &&
          skocko.includes(polja[currentRow][i]) &&
          !usedIndexes.includes(skocko.indexOf(polja[currentRow][i]))
        ) {
          rowFeedback[i] = 1; // Žuta (pogrešna pozicija)
          usedIndexes.push(skocko.indexOf(polja[currentRow][i]));
        }
      }
  
      newFeedback[currentRow] = rowFeedback;
      setFeedback(newFeedback);
  
      if (JSON.stringify(updatedPolja[currentRow]) === JSON.stringify(skocko)) {
        const points = calculatePoints(rowFeedback);
        const roomName = window.location.pathname.split("/").pop();
        socket.emit("gameConfirmed", { roomName, game: "skocko", points, socketId });
        alert(`Pobjeda! Osvojili ste ${points} bodova.`);
        props.setGameName("");
        return;
      }
  
      if (currentRow === 5) {
        const points = calculatePoints(rowFeedback);
      const roomName = window.location.pathname.split("/").pop();
      socket.emit("gameConfirmed", { roomName, game: "skocko", points, socketId });
      alert(`Kraj igre. Osvojili ste ${points} bodova.`);
      props.setGameName("");
      return;
      }
  
      setCurrentRow(currentRow + 1);
      setCurrentPlace(0);
    }
  };
  
  useEffect(() => {

    if (currentRow === 6) {
      console.log("Kraj igre");
      alert("Kraj igre");
    }
  }, [currentRow])

  const handleDelete = (r, k) => {
    const updatedPolja = [...polja];
    updatedPolja[r][k] = 0;
    setPolja(updatedPolja);
  }

  return (
    <>
      <BackOnTrack setGameName={props.setGameName} />
    <Timer points={0} setGameName={props.setGameName} gameName={"skocko"} roomName={window.location.pathname.split("/").pop()} socketId={socketId} />

      <div className="flex mt-7 items-center border-2 p-2 w-11/12 sm:w-1/2 m-auto space-x-1">
        <div className="w-full flex flex-col items-center ">
          {polja.map((polje, indexr) => {
            return (
              <div key={indexr} className="flex w-full mb-5 space-x-1">
                {polje.map((number, indexk) => {
                  return (
                    <p
                      key={indexk}
                      className="w-1/5 rounded-md p-2 min-h-10 sm:min-h-4"
                    >
                      <img
                        className="h-12 m-auto"
                        onClick={() => handleDelete(indexr, indexk)}
                        src={"/" + number + ".jfif"}
                      />
                    </p>
                  );
                })}
                <div className="flex w-1/5 flex-col items-center">
  <div className="flex flex-wrap items-center">
    {feedback[indexr].map((color, i) => (
      <i
        key={i}
        className={`rounded-full h-4 w-4 m-1 ${
          color === 2
            ? "bg-red-600"
            : color === 1
            ? "bg-yellow-500"
            : "bg-gray-400"
        }`}
      ></i>
    ))}
  </div>
</div>

              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center m-auto justify-between space-x-2 w-11/12 sm:w-1/2">
        {[1, 2, 3, 4, 5, 6].map((number, index) => {
          return (
            <button
              key={index}
              onClick={() => handleChange(number)}
              className="w-fit p-2 rounded-md"
            >
              <img className="h-12 m-auto" src={"/" + number + ".jfif"}></img>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Skocko;
