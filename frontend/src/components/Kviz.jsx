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
  <Timer
    setGameName={props.setGameName}
    gameName={"kviz"}
    socketId={socketId}
    roomName={roomName}
    points={points}
  />

  <div className="min-h-[70vh] px-4 mt-20">
    <div className="max-w-4xl mx-auto">

      {/* TOP BAR: PROGRESS + SCORE */}
      <div className="mb-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-5 sm:p-6">
        <div className="flex items-center justify-between gap-4">
          <div className="">
            <p className="text-xs uppercase tracking-widest ">Pitanje</p>
            <p className="text-2xl font-extrabold">
              {currentQuestion + 1} <span className="">/ {kviz.length}</span>
            </p>
          </div>

          <div className="text-right ">
            <p className="text-xs uppercase tracking-widest ">Bodovi</p>
            <p className="text-2xl font-extrabold">
              {points}
            </p>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="mt-4 h-3 rounded-full bg-black/30 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-sky-500 to-blue-700 transition-all duration-300"
            style={{ width: `${((currentQuestion + 1) / kviz.length) * 100}%` }}
          />
        </div>
      </div>

      {/* QUESTION + ANSWERS */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-6 sm:p-10">
        {kviz.map((pitanje, index) => {
          if (index !== currentQuestion) return null;

          return (
            <div key={index}>
              {/* QUESTION */}
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/30 border border-white/10 text-white/80 text-xs uppercase tracking-widest">
                  🎯 Kviz pitanje
                </div>

                <p className="mt-4 text-center text-white text-xl sm:text-2xl font-extrabold tracking-wide leading-snug
                  bg-gradient-to-br from-sky-500/80 to-blue-700/80
                  rounded-2xl p-5 shadow-xl border border-white/10">
                  {pitanje.pitanje}
                </p>
              </div>

              {/* ANSWERS */}
              <div className="grid grid-cols-2 gap-1 sm:gap-4">
                {pitanje.odgovori.map((odgovor, i) => {
                  let cls =
                    "bg-gradient-to-br from-sky-500 to-blue-700 hover:scale-[1.02] active:scale-95";

                  // FEEDBACK STATE
                  if (showFeedback) {
                    const isCorrect = odgovor === kviz[currentQuestion].tacanOdgovor;
                    const isSelected = i === selectedAnswer;

                    if (isCorrect) {
                      cls =
                        "bg-gradient-to-br from-emerald-500 to-green-700 shadow-[0_0_28px_rgba(16,185,129,0.6)]";
                    } else if (isSelected && !isCorrect) {
                      cls =
                        "bg-gradient-to-br from-red-600 to-rose-700 shadow-[0_0_28px_rgba(220,38,38,0.55)]";
                    } else {
                      cls =
                        "bg-white/10 text-white/50 cursor-not-allowed";
                    }
                  }

                  return (
                    <button
                      key={i}
                      onClick={() => !showFeedback && checkAnswer(i)}
                      disabled={showFeedback}
                      className={`
                        w-full min-h-[64px] rounded-2xl p-1 sm:px-5 sm:py-5
                        text-white font-extrabold uppercase tracking-wide
                        shadow-xl border border-white/10 transition
                        ${cls}
                      `}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-white/80 text-xs">
                          Odgovor {String.fromCharCode(65 + i)}
                        </span>
                        {showFeedback && (odgovor === kviz[currentQuestion].tacanOdgovor) && (
                          <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-black/30 border border-white/10">
                            ✅ TAČNO
                          </span>
                        )}
                        {showFeedback && i === selectedAnswer && (odgovor !== kviz[currentQuestion].tacanOdgovor) && (
                          <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-black/30 border border-white/10">
                            ❌ NETACNO
                          </span>
                        )}
                      </div>

                      <div className="mt-2 text-sm sm:text-xl">
                        {odgovor}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* FOOTER TIP */}
              <div className="mt-8 text-center text-white/70 text-sm">
                Savjet: Kad odabereš odgovor, sistem pokaže tačan (zeleno) i tvoj izbor.
              </div>
            </div>
          );
        })}
      </div>

      {/* BOTTOM SCORE (optional, keep if you want) */}
      <p className="p-4 text-center mt-6 text-white/80 bg-black/20 rounded-2xl border border-white/10 shadow-inner max-w-4xl mx-auto">
        Bodovi: <span className="font-extrabold text-white">{points}</span>
      </p>
    </div>
  </div>
</>

  );
};

export default Kviz;
