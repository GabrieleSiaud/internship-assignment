// Package models contains data structures used across the application.
package models

/*Game represents a video game with details such as title, pricing,
  platform, and popularity metrics.*/
type Game struct {
	ID       int     `json:"id"`
	Title    string  `json:"title"`
	ImageURL string  `json:"image_url"`
	Price    float64 `json:"price"`
	Discount int     `json:"discount"`
	Likes    int     `json:"likes"`
	Place    string  `json:"place"`
	Platform string  `json:"platform"`
	Image    string  `json:"image"`
}
