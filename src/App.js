import React from "react";
import logo from "./myphoto.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>This is my personal website.</p>
        <a
          className="App-link"
          href="https://www.instagram.com/ma_nd_ip/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Enter
        </a>
      </header>
    </div>
  );
}

export default App;
