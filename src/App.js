import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Index from "./components/Index.js";
import About from "./components/About.js";
import { UserContext } from "./UserContext";
import "./styles.css";

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
      <UserContext.Provider value={{ user, setUser }}>
        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
      </UserContext.Provider>
    </Router>
  );
}
