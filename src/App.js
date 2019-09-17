import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class Developer {
  constructor(firstname, lastname){
    this.firstname = firstname
    this.lastname = lastname
  }

  getName(){
    return `${this.firstName} ${this.lastName}`
  }
}

const basLightyear = new Developer("Bas", "Lightyear")

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React, {basLightyear.firstname} {basLightyear.lastname}. You handsome devil!</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {list.map(item => 
              <div>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
        )}
      </div>
    );
  }
}

export default App;
