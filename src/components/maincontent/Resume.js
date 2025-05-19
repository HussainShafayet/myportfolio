import React from 'react';
import styles from './Resume.module.css';

export default function Resume() {
  return (
    <>
      <div className={styles.resumeContainer}>
        <div className={`${styles.expertise}`}>
          <div className="card">
            <div className="card-header">
            <div className="mt-2">
              <h4>Experience</h4>
              <span className="line"></span>
            </div>
            </div>
            <div className="card-body">
              <h6 className="title text-info">Software Developer | Algorithm Generation</h6>
              <p>Dec 2022 - Present</p>
              <p className="subtitle">🚀 Crafted scalable web solutions as a Software Developer for 1 year at Algorithm Generation Ltd., specializing in Ember.js</p>
              <hr />
              <h6 className="title text-info">Junior Developer | Algorithm Generation</h6>
              <p>Dec 2021 - Nov 2022</p>
              <p className="subtitle">💡 For a year, I dived into coding and collaborative projects as a Junior Developer at Algorithm Generation Ltd.</p>
              <hr />
              <h6 className="title text-info">Apprenticeship | Algorithm Generation</h6>
              <p>Jun 2021 - Nov 2021</p>
              <p className="subtitle">🛠️ Completed a dynamic 6-month apprenticeship, gaining hands-on experience in real-world software projects.</p>
            </div>
          </div>
        </div>
        <div className={`${styles.education}`}>
          <div className="card">
            <div className="card-header">
            <div className="mt-2">
              <h4>Education</h4>
              <span className="line"></span>
            </div>
            </div>
            <div className="card-body">
              <h6 className="title text-info">Sylhet Engineering College</h6>
              <p>BSc in Computer Science and Engineering</p>
              <p className="subtitle">🎓 Graduated with a BSc in Computer Science and Engineering, honing skills and embracing the world of technology</p>
              <hr />
              <h6 className="title text-info">Sylhet Commerce College</h6>
              <p>HSC</p>
              <p className="subtitle">📘 Completed Higher Secondary education at Sylhet Commerce College, cultivating a passion for science.</p>
              <hr />
              <h6 className="title text-info">Jahangirpur T Amin Pilot Govt High School</h6>
              <p>SSC</p>
              <p className="subtitle">📘 Completed Secondary School education at Jahangirpur T Amin Pilot Govt High School, laying the foundation for my educational journey.</p>
            </div>
          </div>
        </div>
        <div className={`${styles.skill}`}>
          <div className="card">
            <div className="card-header">
              <div className="pull-left">
                <h4 className="mt-2">Skills</h4>
                <span className="line"></span></div>
            </div>
            <div className="card-body pb-2">
              <h6>Javascript</h6>
              <div className={`${styles.progressBarHeight} progress mb-1`}>
                <div className="progress-bar bg-info" role="progressbar" style={{width:"97%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>Python</h6>
              <div className={`${styles.progressBarHeight} progress mb-1`}>
                <div className="progress-bar bg-info" role="progressbar" style={{width:"60%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>React</h6>
              <div  className={`${styles.progressBarHeight} progress mb-1`}>
                <div className="progress-bar bg-info" role="progressbar" style={{width:"90%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>Ember</h6>
              <div  className={`${styles.progressBarHeight} progress mb-1`}>
                <div className="progress-bar bg-info" role="progressbar" style={{width:"80%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>Bootstrap</h6>
              <div className={`${styles.progressBarHeight} progress mb-1`}>
                <div className="progress-bar bg-info" role="progressbar" style={{width:"87%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>Tailwind</h6>
              <div className={`${styles.progressBarHeight} progress mb-1`}>
                <div className="progress-bar bg-info" role="progressbar" style={{width:"77%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>Django</h6>
              <div  className={`${styles.progressBarHeight} progress mb-1`}>
                <div className="progress-bar bg-info" role="progressbar" style={{width:"60%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.language}`}>
          <div className="card">
            <div className="card-header">
              <div className="pull-left">
                <h4 className="mt-2">Language</h4>
                <span className="line"></span></div>
            </div>
            <div className="card-body pb-2">
              <h6>English</h6>
              <div  className={`${styles.progressBarHeight} progress mb-1`}>
                <div className="progress-bar bg-info" role="progressbar" style={{width:"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <h6>Bangla</h6>
              <div  className={`${styles.progressBarHeight} progress mb-1`}>
                <div className="progress-bar bg-info" role="progressbar" style={{width:"100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
