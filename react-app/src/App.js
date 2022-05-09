import React from "react";
import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import Tick from "./components/Tick";
import Welcome from "./components/Welcome";
import Comment from "./components/Comment";
import Clock from "./components/Clock";
import './App.css';

const comment = {
    date: new Date(),
    text: 'Hello, this is my first comment',
    author: {
        name: 'Ali',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png'
    }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Frontend Development 1400

        <HelloWorld />

        <br />

        <Clock date={new Date()} />

        <br />

        {/*<Comment*/}
        {/*    date={comment.date}*/}
        {/*    text={comment.text}*/}
        {/*    author={comment.author}*/}
        {/*/>*/}

        {/*<br />*/}

        {/*<Users />*/}

        {/*<br />*/}

        {/*<Tick />*/}

        {/*<br />*/}

        <Welcome name="Yasamin" />

        {/*<Welcome name="Ali" />*/}

        {/*<Welcome name="Mohadeseh" />*/}

        {/*<Welcome name="Hamid" />*/}
      </header>
    </div>
  );
}

export default App;
