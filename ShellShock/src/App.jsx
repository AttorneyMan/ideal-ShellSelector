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
        <a href="https://github.com/AttorneyMan/ideal-ShellSelector/blob/main/Components/ShellShock/src/assets/yes.jpeg?raw=true" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://github.com/AttorneyMan/ideal-ShellSelector/blob/main/Components/ShellShock/src/assets/mouse-technique.png?raw=true" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
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
        Click on the Vite and React logos to learn more

      </p>
    </>
  )
}

export default App
