import React from 'react';
import './App.css';
import Home from './components/views/Home';
import About from './components/views/About';
import ProjectsPage from './components/views/ProjectsPage';
import Nav from './components/navigation/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './main.scss';
import ContactsPage from './components/views/ContactsPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Define routes here */}
          <Route path="dewan.dev/" element={<Home />} />
          <Route path="dewan.dev/about" element={<About />} />
          <Route path="dewan.dev/projects" element={<ProjectsPage />} />
          <Route path="dewan.dev/contacts" element={<ContactsPage />} />
        </Routes>

        {/* Bottom Nav Bar - Fixed - Stays on Every Page */}
        <Nav />
      </Router>
    </div>
  );
}

export default App;
