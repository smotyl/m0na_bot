import React from 'react';
import styles from './ListCard.module.css';

function ListItem({ item }) {
  return (
    <div className={styles.card}>
      <h2>{item}</h2>
    </div>
  );
}

export default ListItem;
