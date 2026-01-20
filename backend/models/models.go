package models

type Game struct {
	ID       int     `json:"id"`
	Title    string  `json:"title"`
	ImageURL string  `json:"image_url"`
	Price    float64 `json:"price"`
	Discount int     `json:"discount"`
	Likes    int     `json:"likes"`
	Place    string  `json:"place"`
}
