import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [countTwo, setCountTwo] = useState(0)

  return (
    <>
      <div>

        <img src={viteLogo} className="player1" alt="Vite logo" />

        <img src={reactLogo} className="player2" alt="React logo" />

      </div>
      <h1>Two-Click Monty</h1>
      <div className="PlayerCard1" key="player1">
        <button onClick={() => setCount((count) => count + Math.random(3))}>
          count is {count.toFixed()}
        </button>
      </div >
      <div className="PlayerCard2" >
        <button onClick={() => setCountTwo((countTwo) => countTwo + Math.random(3))}>
          count is {countTwo.toFixed(0)}
        </button>
      </div>
      <div className='TheRules'>
        <p>
          First to Score 11 Wins the Game!!
        </p>
      </div>
      <p className="read-the-docs">
        Clicker beware because not all Clicks are made equal.. Just that sum clicks don't Add up!

      </p>
    </>
  )
}

export default App
