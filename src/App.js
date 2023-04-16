import React from 'react';
import PostsPage from './pages/PostsPage';
import NavBar from './components/NavBar';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <PostsPage />
    </div>
  );
}

export default App;