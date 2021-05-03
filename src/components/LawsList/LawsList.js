import React from 'react';
import PropTypes from 'prop-types';

import styles from './LawsList.module.css';

import ListCard from '../ListCard';

const LawsList = ({ response }) => {
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
          <a href={item.url} target="_blank" rel="noreferrer">
            <ListCard item={item.description} />
          </a>
        </li>
      ))}
    </ul>
  );
};

LawsList.propTypes = {
  response: PropTypes.object,
};

export default LawsList;
