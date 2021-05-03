import React from 'react';
import styles from './Home.module.css';

import EntitiesList from '../../components/EntitiesList';

import logo from '../../assets/logo.png';

function Home() {
  return (
    <div className={styles.home}>
      <img src={logo} alt="m0na_bot logo" className={styles.logo} />
      <EntitiesList />
    </div>
  );
}

export default Home;
