import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Game from './pages/Game.jsx'
import { GameProvider } from './context/GameContext.jsx'
import SinglePlayerGame from './pages/SinglePlayerGame.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  }, 
  {
    path:'/game/:gameId',
    element:<Game/>
  },{
    path:'/singleplayer',
    element: <SinglePlayerGame/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameProvider>
    <RouterProvider router={router}></RouterProvider>
    </GameProvider>
  </StrictMode>,
)
