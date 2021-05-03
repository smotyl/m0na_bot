import React from 'react';
import PropTypes from 'prop-types';

const TweeterButton = ({ publicEntity }) => {
  return (
    <a
      data-show-count="false"
      className="twitter-share-button"
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      data-text={`Atualização em projetos de lei na ${publicEntity.toUpperCase()}. Mais informações:`}
    >
      Tweet
    </a>
  );
};

TweeterButton.propTypes = {
  publicEntity: PropTypes.string.isRequired,
};

export default TweeterButton;
