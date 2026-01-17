import React from 'react'
const GamePage = ({props}) => {
  const handleGameChange = (gameName) => {
    const playedGames = JSON.parse(localStorage.getItem("playedGames")) || props.playedGames
    if (playedGames.includes(gameName)) return
    props.setGameName(gameName)
    props.setPlayedGames([...playedGames, gameName])
    localStorage.setItem("playedGames", JSON.stringify([...playedGames, gameName]))
  }
  const singlePlayer = window.location.href.includes("singleplayer")
  return (
 <>
  <div className="min-h-[70vh] px-4 mt-16">
    {!props.gameName ? (
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-xs uppercase tracking-widest shadow">
            🎮 Multiplayer Lobby
          </div>
          <h1 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-widest uppercase text-white drop-shadow">
            Odaberite igru
          </h1>
          <p className="mt-2 text-white/70">
            Klikni igru da započneš rundu. Igrane igre su zaključane.
          </p>
        </div>

        {/* LIST */}
        <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-5 sm:p-8">
          <div className="flex flex-col gap-4">
            {[
              { name: "Slagalica", myPoints: props.slagalicaPoints, enemyPoints: props.enemySlagalicaPoints, icon: "🧩" },
              { name: "MojBroj", myPoints: props.mojBrojPoints, enemyPoints: props.enemyMojBrojPoints, icon: "🔢" },
              { name: "Skocko", myPoints: props.skockoPoints, enemyPoints: props.enemySkockoPoints, icon: "🎰" },
              { name: "Spojnice", myPoints: props.spojnicePoints, enemyPoints: props.enemySpojnicePoints, icon: "🔗" },
              { name: "Kviz", myPoints: props.kvizPoints, enemyPoints: props.enemyKvizPoints, icon: "❓" },
              { name: "Asocijacije", myPoints: props.asocijacijaPoints, enemyPoints: props.enemyAsocijacijaPoints, icon: "🧠" },
            ].map((game) => {
              const played = props.playedGames.includes(game.name);

              return (
                <button
                  key={game.name}
                  onClick={() => !played && handleGameChange(game.name)}
                  disabled={played}
                  className={`
                    w-full rounded-3xl p-5 sm:p-6 text-left transition
                    border border-white/15 shadow-xl
                    ${played
                      ? "bg-white/5 text-white/50 cursor-not-allowed"
                      : "bg-gradient-to-br from-sky-500/80 to-blue-700/80 hover:scale-[1.02] active:scale-95"
                    }
                  `}
                >
                  <div className="flex items-center justify-between gap-4">
                    {/* LEFT SIDE */}
                    <div className="flex items-center gap-4">
                      <div className={`
                        h-12 w-12 rounded-2xl flex items-center justify-center text-2xl shadow
                        ${played ? "bg-black/20" : "bg-black/30"}
                      `}>
                        {game.icon}
                      </div>

                      <div>
                        <p className="text-lg sm:text-xl font-extrabold tracking-widest uppercase">
                          {game.name}
                        </p>
                        <p className="text-xs uppercase tracking-widest text-white/70">
                          {played ? "Zavrseno" : "Spremno za igranje"}
                        </p>
                      </div>
                    </div>

                    {/* SCORE PILLS */}
                    <div className="flex items-center gap-3">
                      <div className={`
                        px-4 py-2 rounded-full font-extrabold tracking-widest shadow
                        ${played ? "bg-black/20" : "bg-black/30"}
                      `}>
                        <span className="text-white/70 text-xs uppercase mr-2">Ti</span>
                        <span className="text-white">{game.myPoints}</span>
                      </div>

                      {!singlePlayer && (
                        <div className={`
                          px-4 py-2 rounded-full font-extrabold tracking-widest shadow
                          ${played ? "bg-black/20" : "bg-black/30"}
                        `}>
                          <span className="text-white/70 text-xs uppercase mr-2">On</span>
                          <span className="text-white">{game.enemyPoints}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* TOTAL BAR */}
          <div className="mt-7 rounded-3xl p-5 sm:p-6 border border-white/15 shadow-2xl
            bg-gradient-to-r from-fuchsia-600/80 to-pink-700/80">
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-black/30 flex items-center justify-center text-2xl shadow">
                  🏆
                </div>
                <div>
                  <p className="text-white text-lg sm:text-xl font-extrabold tracking-widest uppercase">
                    Ukupno
                  </p>
                  <p className="text-white/80 text-xs uppercase tracking-widest">
                    Zbir svih bodova
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-5 py-3 rounded-full bg-black/30 text-white font-extrabold shadow">
                  <span className="text-white/80 text-xs uppercase mr-2">Ti</span>
                  {props.pointsPlayer1}
                </div>

                {!singlePlayer && (
                  <div className="px-5 py-3 rounded-full bg-black/30 text-white font-extrabold shadow">
                    <span className="text-white/80 text-xs uppercase mr-2">On</span>
                    {props.pointsPlayer2}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>{props.renderGame()}</div>
    )}
  </div>
</>

  )
}

export default GamePage