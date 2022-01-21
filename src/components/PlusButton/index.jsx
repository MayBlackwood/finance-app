import React from 'react';
import './styles.scss';

const PlusButton = ({ handleClick }) => {
  return (
    <img
      className="plusButton"
      onClick={handleClick}
      src="https://img.icons8.com/ios/50/000000/plus--v1.png"
    />
  );
};

export default PlusButton;
