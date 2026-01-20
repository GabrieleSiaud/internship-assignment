package handlers

import (
	"context"
	"encoding/json"
	"log"
	"net/http"
	"strings"

	"eneba/models"

	"github.com/jackc/pgx/v5"
	"github.com/jackc/pgx/v5/pgxpool"
)

func ListGamesHandler(pool *pgxpool.Pool) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {

		search := strings.ToLower(r.URL.Query().Get("search"))
		var games []models.Game
		var rows pgx.Rows
		var err error

		if search != "" {
			searchParam := "%" + search + "%"
			rows, err = pool.Query(context.Background(),
				`SELECT id, title, image_url, price, discount, likes, place FROM games WHERE LOWER(title) LIKE $1`, searchParam)
		} else {
			rows, err = pool.Query(context.Background(),
				`SELECT id, title, image_url, price, discount, likes, place FROM games`)
		}

		if err != nil {
			log.Println("Query error:", err)
			http.Error(w, "Database error", http.StatusInternalServerError)
			return
		}
		defer rows.Close()

		for rows.Next() {
			var g models.Game
			if err := rows.Scan(&g.ID, &g.Title, &g.ImageURL, &g.Price, &g.Discount, &g.Likes, &g.Place); err != nil {
				log.Println("Scan error:", err)
				http.Error(w, "Error scanning data", http.StatusInternalServerError)
				return
			}
			games = append(games, g)
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(games)
	}
}
