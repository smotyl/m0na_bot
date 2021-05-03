import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

import Loading from '../../components/Loading';
import LawsList from '../../components/LawsList';

import styles from './PublicEntity.module.css';

import logo from '../../assets/logo.png';

function PublicEntity() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const { public_entity } = useParams();

  const getPublicEntity = async () => {
    setLoading(true);
    const response = await fetch(
      `http://localhost:3001/robots/${public_entity}`,
      {
        method: 'GET',
      }
    );
    const parsed = await response.json();
    setResponse(parsed);
    setLoading(false);
  };

  useEffect(() => {
    getPublicEntity();
  }, []);

  return (
    <div className={styles.container}>
      {loading && <Loading />}

      <img src={logo} alt="m0na_bot logo" className={styles.logo} />

      <h1 className={styles.entityName}>{public_entity.toUpperCase()}</h1>

      <a
        data-show-count="false"
        className="twitter-share-button"
        href="https://twitter.com/share?ref_src=twsrc%5Etfw"
        data-text={`Atualização em projetos de lei na ${public_entity.toUpperCase()}. Mais informações:`}
      >
        Tweet
      </a>

      <div className={styles.buttonContainer}>
        <Link to="/" tabindex="-1">
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
