import React from 'react';
import styles from './Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebookF, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const socialMediaOrder = ['facebook', 'twitter', 'linkedin', 'github'];

const socialMediaIcons = {
    facebook: faFacebookF,
    twitter: faTwitter,
    linkedin: faLinkedin,
    github: faGithub,
  };
  
  const socialMediaLinks = {
    facebook: 'https://facebook.com/shafayet91',
    twitter: 'https://twitter.com/@imShafayet09',
    linkedin: 'https://linkedin.com/in/hussainshafayet',
    github: 'https://github.com/hussainshafayet',
  };

function Home(props) {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.socialMedia}>
                {socialMediaOrder.map((platform) => (
                    <a key={platform} className={styles[platform]} href={socialMediaLinks[platform]} target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={socialMediaIcons[platform]} size='2x' />
                    </a>
                ))}
           
            </div>
            <div className={styles['header-content']}>
                <h4 className={styles['header-subtitle']}>Hello, I am</h4>
                <h1 className={styles['header-title']}>Shafayet Hussain</h1>
                <h6 className={styles['header-description']}>Software Developer | Javascript | Ember</h6>
                <button className="btn btn-primary btn-rounded"><i class="ti-printer pr-2"></i>Print Resume</button>
                <img src=''></img>
            </div>
        </div>
    );
}

export default Home;