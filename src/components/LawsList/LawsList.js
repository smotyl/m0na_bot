import React from 'react';

import styles from './LawsList.module.css';

import ListCard from '../ListCard';

function LawsList({ response }) {
  if (!response) {
    return <p>Lista vazia</p>;
  }

  if (response && !response.items?.length) {
    return <p>Nenhum projeto de lei encontrando</p>;
  }

  return (
    <ul className={styles.list}>
      {response?.items?.map((item) => (
        <li key={item.description}>
          <a href={item.url} target="_blank">
            <ListCard item={item.description} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default LawsList;
