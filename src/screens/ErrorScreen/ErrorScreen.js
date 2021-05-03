import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ErrorScreen.module.css';

import logo from '../../assets/logo.png';

const ErrorScreen = () => {
  return (
    <div className={styles.container}>
      <img src={logo} alt="m0na_bot logo" className={styles.logo} />

      <h2>Vish... Ocorreu um erro ...</h2>
      <span>Tente novamente mais tarde</span>

      <Link to="/" tabIndex="-1">
        <button className={styles.button}>Voltar</button>
      </Link>
    </div>
  );
};

export default ErrorScreen;
