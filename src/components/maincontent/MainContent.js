// MainContent.js
import React from 'react';
import About from "./About";
import Resume from './Resume';
import NavBar from '../header/Navbar';

const MainContent = (props) => {
  const { refData, scrollToSection} = props;
  return (
    <main>
      <NavBar refData={refData} scrollToSection = {scrollToSection} />
     
      <section ref={refData.aboutRef} className="section">
        <About />
      </section>
      <section ref={refData.resumeRef} className="section">
        <Resume />
      </section>
      {/* Add more sections as needed */}
    </main>
  );
};

export default MainContent;
