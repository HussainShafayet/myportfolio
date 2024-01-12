import React from 'react';
import styles from './About.module.css'
import SocialLink from '../general/SocialLink'

function About(props) {
    return (
        <>
            <div className={styles.aboutContainer}>
                <div className={styles.description}>
                    <h1 className='mb-lg-2'>Who am I ?</h1>
                    <h5 className='mb-2'>Software developer</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?
                    </p>
                    <button className='btn btn-info rounded shadow'>Download my cv</button>
                </div>
                <div className={styles.info}>
                    <h1 className='mb-lg-2'>Personal Info</h1>
                    <ul className="mt40 info list-unstyled">
                        <li><span>Birthdate</span> : 09/13/1996</li>
                        <li><span>Email</span> : info@domain.com</li>
                        <li><span>Phone</span> : + (123) 456-7890</li>
                        <li><span>Skype</span> : John_Doe</li>
                        <li><span>Address</span> :  12345 Fake ST NoWhere AB Country.</li>
                    </ul>
                    <SocialLink />
                </div>
                <div className={styles.expertise}>
                <h1 className='mb-lg-2'>Who am I ?</h1>
                    <h5 className='mb-2'>Software developer</h5>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.sit amet, Qui deserunt consequatur fugit repellendusillo voluptas?
                    </p>
                    <button className='btn btn-info rounded shadow'>Download my cv</button>
                </div>
            </div>
        </>
    );
}

export default About;