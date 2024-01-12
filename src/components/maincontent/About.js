import React from 'react';
import styles from './About.module.css'
import SocialLink from '../general/SocialLink'

function About(props) {
    return (
        <>
            <div className={styles.aboutContainer}>
                <div className={styles.description}>
                <h3 className='mb-lg-2'>Who am I ?</h3>
                    <p className={styles.aboutP}>
                        Hello! I'm Shafayet Hussain, a passionate and seasoned front-end developer based in Bangladesh. With over 2.5 years of experience in the software industry, I've had the privilege of working on exciting projects and contributing to the ever-evolving landscape of web development
                    </p>
                    <button className='btn btn-info rounded shadow'>Download my cv</button>
                </div>
                <div className={styles.personalInfo}>
                    <h3 className='mb-lg-2'>Personal Info</h3>
                    <ul className={`mt40 ${styles.info} list-unstyled }`}>
                        <li><span className={styles.infoSpan}>Birthdate</span> : 15/12/1997</li>
                        <li><span className={styles.infoSpan}>Email</span> : shafayetsec09@gmail.com</li>
                        <li><span className={styles.infoSpan}>Mobile</span> : +8801925890091</li>
                        <li><span className={styles.infoSpan}>Skype</span> : Shafayet Hussain</li>
                        <li><span className={styles.infoSpan}>Address</span> : Banasree, Dhaka, Bangladesh.</li>
                    </ul>
                    <SocialLink />
                </div>
                <div className={styles.expertise}>
                <h3 className='mb-lg-2'>Professional Journey</h3>
                    <p className={styles.aboutP}>
                        I started my journey in web development by diving into the world of Ember.js and React.js, two powerful JavaScript frameworks and liabrary that have shaped my understanding of modern web applications. My time at Algorithm Generation Ltd has been a rewarding experience, allowing me to grow both professionally and technically.
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;