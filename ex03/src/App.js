import React from 'react';
import styles from './estilo.module.css';
class App extends React.Component {
  render() {
    return (
      <div>
      <h1 className={styles.body}>Olá meu nome é Juan</h1>
      <p className={styles.p}>Meu sobronome é Carlos</p>
      <p className={styles.p2}>Vivo em Campinas</p>
      </div>
    );
  }
}
export default App;

