import React, { useState, useContext, useEffect, useRef } from "react";
import BackOnTrack from "../assets/BackOnTrack";
import { io } from "socket.io-client";
import { GameContext } from "../context/GameContext";
import Timer from "./Timer";

const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera

const Asocijacija = ({ props }) => {
  const asocijacija = JSON.parse(localStorage.getItem("asocijacija"));
  const { socketId, showAsocijacija } = useContext(GameContext);

  const [poljeA] = useState(Object.values(asocijacija.A));
  const [poljeB] = useState(Object.values(asocijacija.B));
  const [poljeC] = useState(Object.values(asocijacija.C));
  const [poljeD] = useState(Object.values(asocijacija.D));

  // ✅ UMJESTO tekstova ("kostim"), cuvamo kljuceve polja ("A1", "C1" ...)
  const [selected, setSelected] = useState([]);

  const [selectedPlace, setSelectedPlace] = useState("");
  const [rjesenje, setRjesenje] = useState("");
  const [greskaRjesenja, setGreskaRjesenja] = useState("");
  const [tacnaRjesenja, setTacnaRjesenja] = useState([]);

  const inputRef = useRef(null);

  // ✅ Otvaranje samo tog jednog polja (po key-u)
  const showItem = (key) => {
    setSelected((prev) => (prev.includes(key) ? prev : [...prev, key]));
  };

  useEffect(() => {
    if (selectedPlace) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [selectedPlace]);

  const resetAnswerModal = () => {
    setSelectedPlace("");
    setRjesenje("");
    setGreskaRjesenja("");
  };

  const checkAnswer = () => {
    if (!selectedPlace) {
      alert("Izaberite mjesto");
      return;
    }

    const odgovor = rjesenje.toUpperCase().trim();

    if (selectedPlace === "A") {
      if (odgovor === asocijacija.A.rjesenje) {
        setTacnaRjesenja((prev) => [...prev, odgovor]);
        resetAnswerModal();
      } else {
        setGreskaRjesenja("Pogresan odgovor, pokusaj ponovo!");
      }
    } else if (selectedPlace === "B") {
      if (odgovor === asocijacija.B.rjesenje) {
        setTacnaRjesenja((prev) => [...prev, odgovor]);
        resetAnswerModal();
      } else {
        setGreskaRjesenja("Pogresan odgovor, pokusaj ponovo!");
      }
    } else if (selectedPlace === "C") {
      if (odgovor === asocijacija.C.rjesenje) {
        setTacnaRjesenja((prev) => [...prev, odgovor]);
        resetAnswerModal();
      } else {
        setGreskaRjesenja("Pogresan odgovor, pokusaj ponovo!");
      }
    } else if (selectedPlace === "D") {
      if (odgovor === asocijacija.D.rjesenje) {
        setTacnaRjesenja((prev) => [...prev, odgovor]);
        resetAnswerModal();
      } else {
        setGreskaRjesenja("Pogresan odgovor, pokusaj ponovo!");
      }
    } else if (selectedPlace === "konacno") {
      if (odgovor === asocijacija.glavno_rjesenje) {
        const roomName = window.location.pathname.split("/").pop();

        // po tvojoj logici: sto manje pogodjenih kolona, vise bodova
        if (tacnaRjesenja.length === 4) {
          socket.emit("gameConfirmed", {
            roomName,
            game: "asocijacija",
            points: 16,
            socketId,
          });
          props.setGameName("");
        } else if (tacnaRjesenja.length === 3) {
          socket.emit("gameConfirmed", {
            roomName,
            game: "asocijacija",
            points: 20,
            socketId,
          });
          props.setGameName("");
        } else if (tacnaRjesenja.length === 2) {
          socket.emit("gameConfirmed", {
            roomName,
            game: "asocijacija",
            points: 24,
            socketId,
          });
          props.setGameName("");
        } else {
          socket.emit("gameConfirmed", {
            roomName,
            game: "asocijacija",
            points: 30,
            socketId,
          });
          props.setGameName("");
        }
      } else {
        setGreskaRjesenja("Pogresan odgovor, pokusaj ponovo!");
      }
    }
  };

  // helper za render 1 bloka da ne dupliramo kod
  const renderBlock = (letter, polje, rjesenjeKolone) => {
    const isSolved = tacnaRjesenja.includes(rjesenjeKolone);

    return (
      <div className="sm:rounded-3xl bg-black/20 border border-white/10 shadow-inner p-1 sm:p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-white font-extrabold tracking-widest text-xl">
            {letter}
          </span>
          <button
            onClick={() => setSelectedPlace(letter)}
            className={`px-4 py-2 rounded-full font-extrabold uppercase text-xs tracking-widest transition shadow
              ${
                isSolved
                  ? "bg-emerald-600 text-white"
                  : "bg-white/10 text-white hover:bg-white/15"
              }`}
          >
            Rjesenje
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {polje.map((item, index) => {
            // prva 4 su polja, zadnje je rjesenje kolone
            if (index < 4) {
              const key = `${letter}${index + 1}`;
              const revealed = isSolved || selected.includes(key);

              return (
                <button
                  key={key}
                  onClick={() => showItem(key)}
                  className="min-h-14 rounded-md text-sm sm:font-extrabold uppercase sm:tracking-widest text-white shadow-xl transition
                    bg-gradient-to-br from-sky-500/80 to-blue-700/80 hover:scale-[1.02] active:scale-95 border border-white/10"
                >
                  {revealed ? item : key}
                </button>
              );
            }

            // dugme rjesenja kolone
            return (
              <button
                key={`${letter}-rjesenje`}
                onClick={() => setSelectedPlace(letter)}
                className={`min-h-14 rounded-2xl font-extrabold uppercase tracking-widest text-white shadow-xl transition border border-white/10
                  ${
                    isSolved
                      ? "bg-gradient-to-r from-emerald-500 to-green-700 shadow-[0_0_25px_rgba(16,185,129,0.55)]"
                      : "bg-white/10 hover:bg-white/15"
                  }`}
              >
                {isSolved ? rjesenjeKolone : letter}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <BackOnTrack setGameName={props.setGameName} />
      <Timer
        points={0}
        setGameName={props.setGameName}
        gameName={"asocijacija"}
        roomName={window.location.pathname.split("/").pop()}
        socketId={socketId}
      />

      {/* FINISHED MODAL */}
      {showAsocijacija && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <div className="relative w-full max-w-xl sm:rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-8 text-white">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 text-white/80 text-xs uppercase tracking-widest">
                🏁 Kraj igre
              </div>
              <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold tracking-widest uppercase">
                Asocijacija je zavrsena
              </h2>
              <p className="mt-2 text-white/70">Rjesenja su bila:</p>
            </div>

            <ul className="mt-6 space-y-3">
              {[
                ["A", asocijacija.A.rjesenje],
                ["B", asocijacija.B.rjesenje],
                ["C", asocijacija.C.rjesenje],
                ["D", asocijacija.D.rjesenje],
              ].map(([k, v]) => (
                <li
                  key={k}
                  className="flex items-center justify-between rounded-2xl bg-black/30 border border-white/10 px-4 py-3 shadow-inner"
                >
                  <span className="font-extrabold tracking-widest">{k}</span>
                  <span className="font-extrabold uppercase text-emerald-300">
                    {v}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl bg-gradient-to-r from-fuchsia-600 to-pink-700 px-4 py-4 text-center shadow-[0_0_30px_rgba(236,72,153,0.55)] border border-white/10">
              <p className="text-xs uppercase tracking-widest text-white/80">
                Konacno rjesenje
              </p>
              <p className="text-2xl font-extrabold uppercase mt-1">
                {asocijacija.glavno_rjesenje}
              </p>
            </div>

            <button
              onClick={() => props.setGameName("")}
              className="mt-7 w-full py-4 rounded-full font-extrabold uppercase tracking-widest
                bg-red-600 hover:bg-red-700 active:scale-95 transition shadow-xl"
            >
              Napusti
            </button>
          </div>
        </div>
      )}

      {/* ANSWER MODAL */}
      {selectedPlace && (
        <div className="fixed inset-0 z-40 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          <div className="relative w-full max-w-lg sm:rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl p-6 sm:p-8 text-white">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 text-white/80 text-xs uppercase tracking-widest">
                ✍️ Unos rjesenja
              </div>
              <h3 className="mt-4 text-2xl font-extrabold uppercase tracking-widest">
                Rjesenje za:{" "}
                <span className="text-fuchsia-300">{selectedPlace}</span>
              </h3>
            </div>

            <div className="mt-6">
              <input
                onChange={(e) => setRjesenje(e.target.value)}
                value={rjesenje}
                ref={inputRef}
                type="text"
                placeholder="Upisi rjesenje..."
                className="w-full px-4 py-4 rounded-2xl bg-black/40 border border-white/15 text-white placeholder:text-white/40
                  outline-none focus:ring-2 focus:ring-fuchsia-400 shadow-inner text-lg"
              />
              {greskaRjesenja && (
                <p className="mt-3 text-red-300 font-bold text-center">
                  {greskaRjesenja}
                </p>
              )}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button
                onClick={resetAnswerModal}
                className="py-4 rounded-2xl font-extrabold uppercase tracking-widest
                  bg-red-600 hover:bg-red-700 active:scale-95 transition shadow-xl"
              >
                Odustani
              </button>

              <button
                onClick={checkAnswer}
                className="py-4 rounded-2xl font-extrabold uppercase tracking-widest
                  bg-gradient-to-r from-emerald-500 to-green-700
                  shadow-[0_0_30px_rgba(16,185,129,0.55)]
                  hover:scale-[1.02] active:scale-95 transition"
              >
                Potvrdi
              </button>
            </div>
          </div>
        </div>
      )}

      {/* BOARD */}
      <div className="min-h-[70vh] sm:px-4 mt-20">
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-xl sm:rounded-3xl border border-white/20 shadow-2xl sm:p-6 sm:p-10">
          {/* HEADER */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 text-white/80 text-xs uppercase tracking-widest">
              🧠 Asocijacija
            </div>
            <h2 className="mt-3 text-md sm:text-4xl font-extrabold tracking-widest uppercase text-sky-600 drop-shadow">
              Pogodi pojmove i konacno rjesenje
            </h2>
          </div>

          {/* TOP 2 BLOCKS */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-6">
            {renderBlock("A", poljeA, asocijacija.A.rjesenje)}
            {renderBlock("B", poljeB, asocijacija.B.rjesenje)}
          </div>

          {/* FINAL */}
          <div className="my-7 flex justify-center">
            <button
              onClick={() => setSelectedPlace("konacno")}
              className="w-full sm:w-2/3 py-5 rounded-full font-extrabold uppercase tracking-widest text-white
                bg-gradient-to-r from-fuchsia-600 to-pink-700
                shadow-[0_0_40px_rgba(236,72,153,0.6)]
                hover:scale-[1.02] active:scale-95 transition border border-white/10"
            >
              ⭐ Konacno rjesenje ⭐
            </button>
          </div>

          {/* BOTTOM 2 BLOCKS */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-6">
            {renderBlock("C", poljeC, asocijacija.C.rjesenje)}
            {renderBlock("D", poljeD, asocijacija.D.rjesenje)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Asocijacija;
