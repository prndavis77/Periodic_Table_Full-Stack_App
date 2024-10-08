Periodic Table Full-Stack App

An interactive Periodic Table web application built using React (frontend) and Node.js/Express (backend). This app allows users to explore and search for elements in the periodic table, with API support for fetching element details.


Features:

    Interactive periodic table with clickable elements.
    Search functionality to filter elements by name or symbol.
    Memory game where users match elements based on their atomic numbers
    API routes for retrieving detailed information about each element.
    

Tech Stack:

    Frontend: React, HTML, CSS
    Backend: Node.js, Express
    Styling: CSS

Installation and Setup:

To run this project locally, follow these steps:
1. Clone the repository

git clone https://github.com/prndavis77/Periodic_Table_Full-Stack_App.git


2. Install dependencies for both backend and frontend

Navigate to the project directory and run:

npm install


3. Build the React app

To generate the production-ready files for the frontend:

npm run build


4. Start the Node.js server

Start the backend server to serve the React app and API:

node server.js

The app will be running at http://localhost:5000.


Usage:

    Visit http://localhost:5000 in your browser to view the app.
    Use the search bar to find elements by name or symbol.
    Click on any element to view more information.
    

API Endpoints:

The backend exposes a few API routes for fetching element data. Here's an example of one:

    GET /api/elements: Fetch all elements data.
    

Contributing:

Contributions are welcome! Please follow these steps to contribute:

    Fork the repository.
    Create a new branch (git checkout -b feature-branch).
    Make your changes and commit them (git commit -m 'Add some feature').
    Push to the branch (git push origin feature-branch).
    Open a pull request.

License

This project is licensed under the MIT License - see the LICENSE file for details.
