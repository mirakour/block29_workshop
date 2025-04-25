import { useEffect, useState } from "react"
import { fetchAllPlayers } from "./index"
import { Link } from "react-router-dom"
import AddPlayerForm from "./AddPlayerForm"
import "./AllPlayers.css"

export default function AllPlayers() {
  const [players, setPlayers] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    async function getPlayers() {
      const playersFromAPI = await fetchAllPlayers()
      setPlayers(playersFromAPI);
    }
    getPlayers()
  }, [])

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="players-container">
      <h2>Puppy Bowl Roster</h2>

      {/* Add Player Form */}
      <AddPlayerForm setPlayers={setPlayers} />

      {/* Search */}
      <input
        type="text"
        placeholder="Search players..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      {/* Player Cards */}
      <div className="card-grid">
        {filteredPlayers.map((player) => (
          <div key={player.id} className="player-card">
            <img src={player.imageUrl} alt={player.name} />
            <h3>{player.name}</h3>
            <p><strong>Breed:</strong> {player.breed}</p>
            <p><strong>Status:</strong> {player.status}</p>
            <Link to={`/players/${player.id}`} className="detail-link">
              See Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}