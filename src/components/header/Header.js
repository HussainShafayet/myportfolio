// Header.js
import React from 'react';
import Home from '../maincontent/Home';

const Header = (props) => {
  let {homeRef} = props;
  return (
    <header>
     <section ref={homeRef} className="section">
        <Home />
      </section>
    </header>
  );
};

export default Header;
