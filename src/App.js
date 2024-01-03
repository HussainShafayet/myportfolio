import styles from './App.module.css';
import Header from './components/header/Header';
import MainContent from './components/maincontent/MainContent';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className={styles.mainlayout}>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
