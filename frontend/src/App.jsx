import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";  // lupa ir x iš react-icons
import "./App.css";

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = search ? `?search=${encodeURIComponent(search)}` : "";
    fetch(`http://localhost:8080/list${query}`)
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch(console.error);
  }, [search]);

  // Išvalyti paiešką
  const clearSearch = () => setSearch("");

  return (
    <div>
      <header className="app-header">
        <div className="header-left">
          <img
            src="https://static.eneba.games/branding/v2/logoFull.svg"
            alt="Mano Žaidimų Svetainė"
            style={{ height: "50px" }}
          />

          <div style={{ position: "relative", width: "300px" }}>
            <FiSearch 
              style={{ 
                position: "absolute", 
                left: "10px", 
                top: "50%", 
                transform: "translateY(-50%)", 
                color: "white", 
                pointerEvents: "none", 
                fontSize: "20px" 
              }} 
            />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                paddingLeft: "35px",
                fontSize: "16px",
                color: "white",
                backgroundColor: "rgb(93, 4, 195)",
                border: "2px solid white",
                padding: "10px",
                boxSizing: "border-box",
                borderRadius: "4px",
              }}
            />
            {search && (
              <button
                onClick={clearSearch}
                aria-label="Clear search"
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "none",
                  border: "none",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "20px",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FiX />
              </button>
            )}
          </div>


          <h1 style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src="https://static.eneba.games/flags/lang/v2/lithuania.svg"
              alt="Lithuania Flag"
              style={{ width: "24px", height: "24px" }}
            />
            English EU | EUR
          </h1>
        </div>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Favorites">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </button>

          <button className="icon-btn" aria-label="Cart">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M6 6h15l-1.5 9h-11z" />
              <circle cx="9" cy="20" r="1" />
              <circle cx="18" cy="20" r="1" />
            </svg>
          </button>
        </div>

        <img
          src="https://www.pngkey.com/png/full/157-1579943_no-profile-picture-round.png"
          alt="Profile"
          className="profile-pic"
        />
      </header>

      <main style={{ padding: "20px" }}>
        {games.length === 0 ? (
          <p>No games found</p>
        ) : (
          games.map((game) => (
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
          ))
        )}
      </main>

      <footer>
        <p>Gabrielė Šiaudvytytė</p>
      </footer>
    </div>
  );
}

export default App;
