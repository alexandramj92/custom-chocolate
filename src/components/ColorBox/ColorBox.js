import React from 'react';
import './ColorBox.scss';

const ColorBox = ({ hexCode, handleClick }) => {
  const colorBoxStyle = {
    background: hexCode,
  };

  return (
    <div
      className="color-box"
      style={colorBoxStyle}
      onClick={handleClick}
    ></div>
  );
};

export default ColorBox;
