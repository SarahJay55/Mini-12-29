import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './HomePage/HomePage.js';
import { HashRouter, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage.js';
import Nathan from './Nathan/Nathan.js';


class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route component={ HomePage } path='/' exact />
          <Route component={ Nathan } path='/nathan' />

        </div>
      </HashRouter>
    );
  }
}

export default App;
