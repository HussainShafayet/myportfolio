// Header.js
import React from 'react';
import styles from './Header.module.css'
import NavBar from '../header/Navbar';

const Header = () => {
  return (
    <header>
    {/*<div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1>Welcome to Your Portfolio</h1>
      </div>
    </div>*/}
     {/* Navbar */}
     <div className='sticky-top h-100'>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
