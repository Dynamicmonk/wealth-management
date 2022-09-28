import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ReactLogo } from "./assets/images/imagesList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ReactLogo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.orgd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
