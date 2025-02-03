import React, { useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { GameContext } from './context/GameContext';

const socket = io(import.meta.env.VITE_BACKEND_URL); // URL backend servera

const App = () => {
    const {socketId,setSocketId} = useContext(GameContext)
    useEffect(() => {
        localStorage.removeItem('id')
        localStorage.removeItem('enemyPlayer')
        localStorage.removeItem('letters')
        localStorage.removeItem('longestWord')
        localStorage.removeItem('points')
        localStorage.removeItem('skocko')
        localStorage.removeItem('extendedDigits')
        localStorage.removeItem('mainNumber')
        localStorage.removeItem('randomDoubleDigit')
        localStorage.removeItem('singleDigits')
    }, [])

    const createGame = () => {
        socket.emit('createGameLink')
        socket.on('gameLinkCreated', (data) => {
            const linkElement = document.getElementById('linkGame');
            linkElement.innerHTML = `/game/${data.roomName}`;
            linkElement.href = `/game/${data.roomName}`;
            localStorage.setItem('id', data.id)
            setSocketId(data.id)
            console.log(`Generisan link: /game/${data}`);
        })
    };
    
 const copyLink = () => {
    const gameLink = document.getElementById('linkGame').href;
    navigator.clipboard.writeText(gameLink).then(() => {
      alert('Link je kopiran u clipboard!');
    });
  };

  const shareOnFacebook = () => {
    const gameLink = document.getElementById('linkGame').href;

    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(gameLink)}`, '_blank');
  };

    return (
        <>
        <h1 className='text-center py-5 text-3xl font-semibold bg-sky-600 text-white'>SLAGALICA</h1>
          <div className='flex w-full justify-center min-h-[50vh] '>
            <div className='hidden sm:block sm:w-1/2 p-6 min-h-full border-r-2 border-sky-600'>
             <h2 className='font-semibold text-2xl pb-5'>O igri</h2>
             <p className='pb-4'>
             Aparteko Slagalica je kviz igra koja postoji od 2011. Za kratko vreme postala je najpopularnija igra u regionu, obarajući sve rekorde u brzini rasta broja korisnika i pažnji koju je iznenada privukla. Ubrzo nakon pokretanja, praktično nije bilo učionice, prodavnice ili kafea u kom ljudi nisu igrali ili razgovarali o Slagalici.


             </p>
             <p>
             Slagalica se sastoji od sekvence šest kratkih igara (Slagalica, Moj broj, Kombinacije, Spojnice, Kviz znanja i Asocijacije) u trajanju 10-12 minuta. Igrači koriste znanje i taktiku kako bi pobedili protivnika u direktnom duelu – u regularnoj partiji ili na turniru.

             </p>
            </div>
            <div className='w-full sm:w-1/2 p-6 flex items-center flex-col '>
            <h2 className='py-3 text-xl font-semibold'>Singleplayer</h2>
            <button className='bg-sky-600 text-white p-3 rounded-md'>Započni igru</button>

            <h2 className='pt-6 pb-3 text-xl font-semibold'>Multiplayer</h2>
            <button onClick={createGame} className='bg-sky-600 text-white p-3 rounded-md'>Kreiraj link</button>
            <a href='' id='linkGame'></a>
            <div className="mt-2">
                <button onClick={copyLink} className="bg-gray-500 text-white p-2 rounded-md">
                  Kopiraj link
                </button>
                <button onClick={shareOnFacebook} className="bg-blue-600 text-white p-2 rounded-md ml-2">
                  Dijeli na Facebooku
                </button>
              </div>
            </div>
          </div>
        </>
    );
};

export default App;
