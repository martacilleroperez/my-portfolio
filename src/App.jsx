import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // import Routes and Route
import './App.css';
import Home from './Structure/Home';
import Projects from './Structure/Projects'; 
import Playground from './Structure/Playground'
import BookAbout from './Structure/BookAbout';     
import Contact from './Structure/Contact';





const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} /> 
        <Route path="/playground" element={<Playground />} /> 
        <Route path="/bookAbout" element={<BookAbout />} />       
        <Route path="/contact" element={<Contact />} />  
      </Routes>
    </Router>
  );
};

return (
  <div style={{padding: 20, color: '#fff', background: '#222'}}>
    <strong>App mounted ✓</strong>
  </div>
);

export default App;
