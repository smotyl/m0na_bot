import React from 'react';
import PropTypes from 'prop-types';

import styles from './ListCard.module.css';

const ListItem = ({ item }) => {
  return (
    <div className={styles.card}>
      <h2>{item}</h2>
    </div>
  );
};

ListItem.propTypes = {
  item: PropTypes.string.isRequired,
};

export default ListItem;
