import styles from './App.module.css';
import Header from './components/header/Header';
import MainContent from './components/maincontent/MainContent';
import Footer from './components/footer/Footer';
import { useRef } from 'react';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const refData = {
    homeRef:homeRef,
    aboutRef:aboutRef,
    resumeRef:resumeRef,
    projectsRef:projectsRef,
  }

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={styles.mainlayout}>
      <Header homeRef={homeRef} />
      <MainContent refData={refData} scrollToSection = {scrollToSection} />
      <Footer />
    </div>
  );
}

export default App;
