import { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/list")
      .then((res) => {
        console.log("Fetch status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Data from API:", data);
        setGames(data);
      })
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Games from DB</h1>

      {games.length === 0 && <p>No games found</p>}

      {games.map((game) => (
        <div
          key={game.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
          }}
        >
          <h2>{game.title}</h2>
          <p>{game.description}</p>
          <p>💰 {game.price} €</p>
        </div>
      ))}
    </div>
  );
}

export default App;
