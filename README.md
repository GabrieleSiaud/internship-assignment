# INTERNSHIP ASSIGNMENT

This repository contains the full project for the internship assignment — a fullstack web application with separate frontend and backend. It also has more games than there was indicated in the assigment. Additional games are: Minecraft, Grand Theft Auto V and Terraria Steam Gift.

# Project Overview

This assignment implements a **fullstack web application** featuring:

- A **React frontend** with search, icons, and user interface.  
- A **GO backend** serving game data via REST API.

The application is organized into two main folders:
- /frontend
- /backend

*Features* 
- Display list of games from the database  
- Search games by name  
- REST API built with Go  
- PostgreSQL database integration  
- React-based UI

*Tech Stack*

* Frontend
    - React
    - JavaScript
    - CSS
* Backend
    - Go
    - REST API
* Database
    - PostgreSQL

## Getting started

Before you start, make sure you have the following installed:

* For Frontend
- [Node.js](https://nodejs.org/en/) (version 14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js) or [yarn](https://yarnpkg.com/) as package manager

* For Backend
- [Go](https://golang.org/dl/) (version 1.18 or higher recommended)

* For Database
-[PostgreSQL](https://www.postgresql.org/download/)
-[pgAdmin](https://www.pgadmin.org/) (or any other PostgreSQL management tool, recommended for managing your database)

* Additional tools
- A modern web browser (e.g., Chrome, Firefox)

# SET UP 

*Database*:

- Create a new database named: enebaDb.
- Import the database schema and seed data:  
  An SQL file named `enebaDb.sql` is included in the eneba folder.  
  Download and import this file using your preferred PostgreSQL management tool (e.g., pgAdmin) or via terminal:  
  ```bash
  psql -U your_username -d enebaDb -f path/to/enebaDb.sql
- Configure database user and password. Make sure the backend config uses the correct credentials.
    - HOST=localhost
    - PORT=5432
    - USER=postgres
    - PASSWORD=root
    - NAME=enebaDb
- Make sure the PostgreSQL server is running and accessible at the configured host and port.

*Backend*

- Run backend server. In terminal write these commands separately: 
    cd backend
    go run main.go
- The server will be running on localhost:8080.

*Frontend*

- Run frontend. In another terminal write these commands:
    - npm install (only for the first time running React)
    - npm run frontend
- The frontend will be running on localhost:5173. 

# Additional Notes

- Make sure backend and frontend ports do not conflict with other applications on your machine.
- If you change ports or database credentials, update the .env file and frontend API URLs accordingly.
- To stop the servers, use Ctrl+C in the terminal where they are running.