import { useState, useEffect } from "react";
import { FiSearch, FiX } from "react-icons/fi";
import "./App.css";

function App() {
  const [games, setGames] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = search ? `?search=${encodeURIComponent(search)}` : "";
    fetch(`http://localhost:8080/list${query}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setGames(data);
        } else {
          setGames([]);
          console.warn("Received date in invalid format:", data);
        }
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setGames([]);
      });
  }, [search]);


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

          <div className="search-wrapper">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-input"
            />
            {search && (
              <button
                onClick={clearSearch}
                aria-label="Clear search"
                className="clear-button"
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

      <div className="results">
        {search && games.length > 0 && (
          <p style={{ margin: 0 }}>
            {games.length} result{games.length !== 1 ? "s" : ""} found
          </p>
        )}
      </div>

      <main className="games-grid">
        {games.length === 0 ? (
          <p className="no-games">No games found :(</p>
        ) : (
          games.map((game) => {
            const hasDiscount = game.discount > 0;
            const finalPrice = hasDiscount
              ? game.price * (1 - game.discount / 100)
              : game.price;

            const discountedPrice = hasDiscount
              ? finalPrice.toFixed(2)
              : null;

            const cashbackPercent = 20;
            const cashbackAmount = (finalPrice * cashbackPercent / 100).toFixed(2);

            return (
            <div key={game.id} className="game-card">
              <div className="game-image-wrapper">
                <img
                  src={game.image_url}
                  alt={game.title}
                  className="game-image"
                />
              </div>

              <div className="game-info">
                <div className="cashback-badge">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/5363/5363189.png"
                    alt="CASHBACK"
                    style={{ width: "24px", height: "24px" }}
                  />
                  CASHBACK
                </div>
                <h2 className="game-title">{game.title}</h2>
                <p className="game-place">{game.place}</p>

                {hasDiscount ? (
                  <>
                    <div className="game-discount-row">
                      <span className="game-original-price">
                        From {game.price} €
                      </span>
                      <span className="game-discount-badge">
                        -{game.discount}%
                      </span>
                    </div>
                    <p className="game-discounted-price-bottom">
                      {discountedPrice} €
                    </p>
                  </>
                ) : (
                  <p className="game-normal-price">
                    {game.price} €
                  </p>
                )}

                <p className="game-cashback">
                  Cashback: {cashbackAmount} €
                </p>
                
                <p className="likes" title="Added to favorites">
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
                  {game.likes}
                </p>
              </div>

              <button className="add-to-cart-btn">Add to cart</button>
              <button className="options-btn">Explore options</button>
            </div>
          );
          })
        )}
      </main>

      <footer>
        <p>GABRIELĖ ŠIAUDVYTYTĖ 2026</p>
      </footer>
    </div>
  );
}

export default App;
