import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import Loading from '../../components/Loading';
import LawsList from '../../components/LawsList';
import TweeterButton from '../../components/TweeterButton';

import styles from './PublicEntity.module.css';
import logo from '../../assets/logo.png';

import ErrorScreen from '../ErrorScreen';

function PublicEntity() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { public_entity } = useParams();

  const getPublicEntity = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3001/robots/${public_entity}`,
        {
          method: 'GET',
        }
      );
      const parsed = await response.json();
      setResponse(parsed);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getPublicEntity();
  }, []);

  if (error) {
    return <ErrorScreen />;
  }

  return (
    <div className={styles.container}>
      {loading && <Loading />}

      <img src={logo} alt="m0na_bot logo" className={styles.logo} />

      <h1 className={styles.entityName}>{public_entity.toUpperCase()}</h1>

      <TweeterButton publicEntity={public_entity} />

      <div className={styles.buttonContainer}>
        <Link to="/" tabIndex="-1">
          <button className={styles.button}>Voltar</button>
        </Link>
        <button onClick={getPublicEntity} className={styles.button}>
          Atualizar
        </button>
      </div>

      <LawsList response={response?.data} />
    </div>
  );
}

export default PublicEntity;
