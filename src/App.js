import React from 'react';
import './App.css';
import Home from './components/views/Home';
import About from './components/views/About';
import ProjectsPage from './components/views/ProjectsPage';
import Nav from './components/navigation/Nav';
// import { BrowserRouter as Router, HashRouter, Route, Routes } from 'react-router-dom';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './main.scss';
import ContactsPage from './components/views/ContactsPage';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          {/* Define routes here */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Routes>

        {/* Bottom Nav Bar - Fixed - Stays on Every Page */}
        <Nav />
      </HashRouter>
    </div>
  );
}

export default App;
