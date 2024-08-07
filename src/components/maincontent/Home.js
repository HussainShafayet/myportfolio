import React from 'react';
import styles from './Home.module.css';
import SocialLink from '../general/SocialLink';

function Home(props) {
    return (
        <div className={styles.homeContainer}>
        
            <SocialLink customMediaClass={styles.socialMedia} />

            <div className={styles['header-content']}>
                <h4 className={styles['header-subtitle']}>Hello, I am</h4>
                <h1 className={styles['header-title']}>Shafayet Hussain</h1>
                <h6 className={styles['header-description']}>Software Developer | Javascript | Ember | React</h6>
                <button className="btn btn-primary btn-rounded"><i className="ti-printer pr-2"></i>Print Resume</button>
            </div>
        </div>
    );
}

export default Home;