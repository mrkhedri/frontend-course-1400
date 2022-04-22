import React from "react";
import HelloWorld from "./components/HelloWorld";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Frontend Development 1400

        <HelloWorld />

        <a
          className="App-link"
          href="https://reactjs.org"
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
