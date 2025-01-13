import React from 'react'
const GamePage = ({props}) => {
  const handleGameChange = (gameName) => {
    if (props.playedGames.includes(gameName)) return
    props.setGameName(gameName)
    props.setPlayedGames([...props.playedGames, gameName])
  }

  return (
    <>
      <div>
        {!props.gameName ? (
          <div>
            <h1 className="text-2xl text-center pb-3">
              Odaberite igru koju želite igrati
            </h1>
            <div className="flex flex-col items-center space-y-5">
  {[
    { name: "Slagalica", myPoints: props.slagalicaPoints, enemyPoints: props.enemySlagalicaPoints },
    { name: "MojBroj", myPoints:props.mojBrojPoints, enemyPoints: props.enemyMojBrojPoints },
    { name: "Skocko", myPoints: props.skockoPoints, enemyPoints: props.enemySkockoPoints },
    { name: "Spojnice", myPoints: props.spojnicePoints, enemyPoints: props.enemySpojnicePoints },
    { name: "Kviz", myPoints: props.kvizPoints, enemyPoints: props.enemyKvizPoints },
    { name: "Asocijacije", myPoints: props.asocijacijaPoints, enemyPoints: props.enemyAsocijacijaPoints },
  ].map((game) => (
    <div
      key={game.name}
      onClick={() => handleGameChange(game.name)}
      className={`flex space-x-4 w-11/12 sm:w-1/4 justify-between bg-sky-600 text-white p-4 rounded-md cursor-pointer ${props.playedGames.includes(game.name) ? "opacity-50 cursor-not-allowed" : ""}`}
    >
      <p>{game.name}</p>
      <div className="flex ">
        <p className="border-r-2 px-3">{game.myPoints}</p>
        <p className=" px-3">{game.enemyPoints}</p>
      </div>
    </div>
  ))}
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