import React from "react";
import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import Tick from "./components/Tick";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Frontend Development 1400

        <HelloWorld />

        <br />

        <Users />

        <br />

        <Tick />
      </header>
    </div>
  );
}

export default App;
