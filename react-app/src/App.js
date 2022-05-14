import React from "react";
import HelloWorld from "./components/HelloWorld";
import Users from "./components/Users";
import Tick from "./components/Tick";
import Welcome from "./components/Welcome";
import Comment from "./components/Comment";
import Clock from "./components/Clock";
import Form from "./components/Form";
import Toggle from "./components/Toggle";
import './App.css';

const comment = {
    date: new Date(),
    text: 'Hello, this is my first comment',
    author: {
        name: 'Ali',
        avatarUrl: 'https://cdn-icons-png.flaticon.com/512/219/219983.png'
    }
};

const welcome_users = ['Yasamin', 'Ali', 'Mohadeseh', 'Hamid']

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: welcome_users,
      deletedUsers: []
    }
  }

  handleRemoveAli() {
    this.setState({
      users: this.state.users.filter(item => item !== 'Ali'),
      deletedUsers: [
        ...this.state.deletedUsers,
        this.state.users.filter(item => item === 'Ali')
      ],
    })
  }

  render() {
    const { users, deletedUsers } = this.state;

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

          <div style={{ textAlign: "left" }}>
            <h3>Users:</h3>
            {users.map(item => (
              <Welcome key={item} name={item} />
            ))}

            <br/>

            <h3>Deleted Users:</h3>
            {deletedUsers.length
              ? deletedUsers.map(item => (
                <Welcome key={item} name={item} />
              ))
              : <span>There is not any deleted users</span>
            }
          </div>

          <br/>

          <button onClick={() => this.handleRemoveAli()}>
            Remove Ali From List
          </button>

          <Form />

          <br />

          <Toggle />
        </header>
      </div>
    );
  }
}

export default App;
