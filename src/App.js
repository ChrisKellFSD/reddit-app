import React from 'react';
import Container from './components/Container';
import NavBar from './components/NavBar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container />
    </div>
  );
}

export default App;