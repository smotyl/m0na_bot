import React from 'react';
import { Link } from 'react-router-dom';

import styles from './EntitiesList.module.css';

import ListCard from '../ListCard';
import { publicEntities } from '../../utils/constants';

function EntitiesList() {
  return (
    <ul className={styles.list}>
      {publicEntities.map((item) => (
        <li key={item}>
          <Link to={`/${item}`}>
            <ListCard item={item.toUpperCase()} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default EntitiesList;
