import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DrawChart from './DrawChart'
import ChartJs from './DrawChartJs'

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>recharts</h1>
        <DrawChart/>
      </div>
    );
  }
}

export default App;
