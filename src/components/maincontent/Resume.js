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
              <p className="subtitle">🚀 One-year journey as a Software Developer at Algorithm Generation Ltd., specializing in Ember.js wizardry. Crafted sleek and scalable web applications that brought ideas to life.</p>
              <hr />
              <h6 className="title text-info">Junior Developer | Algorithm Generation</h6>
              <p>Dec 2021 - Nov 2022</p>
              <p className="subtitle">💡 Spent a dynamic year as a Junior Developer at Algorithm Generation Ltd., coding and collaborating on projects that fueled innovation and growth.</p>
              <hr />
              <h6 className="title text-info">Apprenticeship | Algorithm Generation</h6>
              <p>Jun 2021 - Nov 2021</p>
              <p className="subtitle">🛠️ Navigated a transformative 6-month apprenticeship in software development, gaining hands-on experience and contributing to the heartbeat of real-world projects.</p>
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
              <h6 className="title text-danger">2017 - Present</h6>
              <p>B.E Computer Engineering</p>
              <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error corrupti recusandae obcaecati odit repellat ducimus cum, minus tempora aperiam at.</p>
              <hr />
              <h6 className="title text-danger">2016 - 2017</h6>
              <p>Diploma in Computer Engineering</p>
              <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, id officiis quas placeat quia voluptas dolorum rem animi nostrum quae.aliquid repudiandae saepe!.</p>
              <hr />
              <h6 className="title text-danger">2015 - 2016</h6>
              <p>High School Degree</p>
              <p className="subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum recusandae, cupiditate ullam dolor ratione repellendus.aliquid repudiandae saepe!.</p>
            </div>
          </div>
        </div>
        <div className={`${styles.skill}`}>skill</div>
        <div className={`${styles.language}`}>language</div>
      </div>
    </>
  )
}
