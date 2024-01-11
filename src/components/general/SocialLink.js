import React from 'react'
import styles from './SocilaLInk.module.css';
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

export default function SocialLink(props) {
    let {socialMediaClass} = props;
  return (
    <>
        <div className={`${socialMediaClass}`}>
            {socialMediaOrder.map((platform) => (
                <a key={platform} className={styles[platform]} href={socialMediaLinks[platform]} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={socialMediaIcons[platform]} size='2x' />
                </a>
            ))}
        
        </div>
    </>
  )
}
