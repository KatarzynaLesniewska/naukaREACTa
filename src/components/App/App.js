import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';

//import List from '../components/List/List';
//import List from '../components/App/App';
//import styles from '../List.scss';

class App extends React.Component {
  render() {
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>My first React app</h1>
        <h2 className={styles.subtitle}>Hello world!</h2>
        <List title={['Things to do ', <sup>soon!</sup>]} />
      </main>
    )
  }
}

export default App;
