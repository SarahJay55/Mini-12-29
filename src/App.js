import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './HomePage/HomePage.js';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={HomePage} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
