import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AllPlayers from './AllPlayers'
import SinglePlayer from './SinglePlayer'
import './App.css'

function App() {
  const [selectedPlayerId, setSelectedPlayerId] = useState(null)

  return (
    <div className="app-container">
      <h1>Puppy Bowl</h1>
      <Routes>
        <Route
          path="/"
          element={<AllPlayers setSelectedPlayerId={setSelectedPlayerId} />}
        />
        <Route
          path="/players/:id"
          element={<SinglePlayer />}
        />
      </Routes>
    </div>
  )
}

export default App

