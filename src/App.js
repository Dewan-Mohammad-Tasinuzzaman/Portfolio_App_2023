import React from 'react';
import './App.css';
import Home from './components/views/Home';
import About from './components/views/About'; // Import the About component
import Nav from './components/navigation/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>

        {/* Bottom Nav Bar - Fixed - Stays on Every Page */}
        <Nav />
      </Router>
    </div>
  );
}

export default App;
