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
                <a
                    href={`${process.env.PUBLIC_URL}/shafayet_s_Resume.pdf`}
                    download="shafayet's_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-button"
                >
                    <button className="btn btn-info rounded shadow">
                    Download Resume
                    </button>
                </a>
            </div>
        </div>
    );
}

export default Home;