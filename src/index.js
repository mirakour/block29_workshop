const cohort = '2501-ftb-et-web-pt';
const BASE_URL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohort}`;

// Get all players
export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error("Error fetching all players:", error);
  }
};

// Get single player by ID
export const fetchSinglePlayer = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.error("Error fetching player:", error);
  }
};

// Add a new player
export const addNewPlayer = async (newPlayerObj) => {
  try {
    const response = await fetch(`${BASE_URL}/players`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPlayerObj),
    });
    const result = await response.json();
    return result.data.newPlayer;
  } catch (error) {
    console.error("Error adding new player:", error);
  }
};

// Remove player by ID
export const removePlayer = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/players/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Error deleting player:", error);
  }
};