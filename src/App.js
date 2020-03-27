import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className="content">
          <h2 className="logo scale">Viridity Trading, LLC</h2>
          <div id="stock-info">
            <span id="stock-ticker" className="scale">SPY</span>
            <span id="stock-price" className="scale">200.00</span>
          </div>
          <p id="comment" className="scale">Hold onto your puts, they will print very soon</p>
        </div>
      </div>
    );
  }
}

export default App;
