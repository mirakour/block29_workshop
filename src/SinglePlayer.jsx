import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { fetchSinglePlayer } from "."
import "./SinglePlayer.css"

export default function SinglePlayer() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null)

  useEffect(() => {
    async function getPlayerDetails() {
      const data = await fetchSinglePlayer(id)
      setPlayer(data)
    }
    getPlayerDetails()
  }, [id])

  if (!player) {
    return <p>Loading player details...</p>
  }

  return (
    <div className="single-player-container">
      <img src={player.imageUrl} alt={player.name} />
      <h2>{player.name}</h2>
      <p><strong>Breed:</strong> {player.breed}</p>
      <p><strong>Status:</strong> {player.status}</p>
      <p><strong>Team:</strong> {player.team?.name || "No team"}</p>
      <Link to="/" className="back-button">← Back to Players</Link>
    </div>
  )
}