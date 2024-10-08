import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import PeriodicTable from "./PeriodicTable";
import "./App.css"; // Ensure your CSS styles are applied

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/periodic-table">Interactive Periodic Table</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/periodic-table" element={<PeriodicTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
