// MainContent.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from "./About";
import Home from "./Home";

const MainContent = () => {
  return (
    <main>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                {/* Add more routes for other sections */}
            </Routes>
        </Router>
      {/* Add more sections as needed */}
    </main>
  );
};

export default MainContent;
