// MainContent.js
import React from 'react';
import About from "./About";
import Resume from './Resume';
import NavBar from '../header/Navbar';
import Contact from './Contact';

const MainContent = (props) => {
  const { refData, scrollToSection} = props;
  return (
    <main>
      <NavBar refData={refData} scrollToSection = {scrollToSection} />
     
      <section ref={refData.aboutRef} className="section  mb-lg-5">
        <About />
      </section>
      <section ref={refData.resumeRef} className="section  mb-lg-5">
        <Resume />
      </section>
      <section ref={refData.contactRef} className="section mb-lg-5">
        <Contact />
      </section>
      {/* Add more sections as needed */}
    </main>
  );
};

export default MainContent;
