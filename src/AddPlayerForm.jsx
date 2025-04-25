import { useState } from "react"
import { addNewPlayer } from "."
import "./AddPlayerForm.css"

export default function AddPlayerForm({ onAdd }) {
  const [name, setName] = useState("")
  const [breed, setBreed] = useState("")
  const [status, setStatus] = useState("bench")
  const [imageUrl, setImageUrl] = useState("")

  async function handleSubmit(e) {
    e.preventDefault()
    const newPlayer = { name, breed, status, imageUrl }
    const result = await addNewPlayer(newPlayer)
    if (result) {
      onAdd(result)
      setName("")
      setBreed("")
      setStatus("bench")
      setImageUrl("")
    }
  }

  return (
    <div className="form-box">
      <h3>Add a New Puppy Player</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            required
            value={breed}
            onChange={(e) => setBreed(e.target.value)}
          />
        </label>
        <label>
          Status:
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="bench">Bench</option>
            <option value="field">Field</option>
          </select>
        </label>
        <label>
          Image URL:
          <input
            type="text"
            required
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <button type="submit">Add Player</button>
      </form>
    </div>
  )
}