import React, { Component } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Portfolio/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    );
  }
}


export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}
