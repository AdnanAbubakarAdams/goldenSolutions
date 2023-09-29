import React from 'react';

// Css And Scss
import './App.css';

// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/home/Home';
import NavBar from './components/navBar/NavBar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
        <Route path='/' element={<Home />} />
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
