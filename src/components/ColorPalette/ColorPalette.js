import React from 'react';
import ColorBox from '../ColorBox/ColorBox';
import './ColorPalette.scss';

const ColorPalette = ({ selectColor }) => {
  const colors = [
    '#090A0A',
    '#FFFFFF',
    '#F70723',
    '#D65E84',
    '#F0AB18',
    '#0C527D',
    '#076E35',
    '#3C4042',
  ];
  return (
    <div className="color-palette">
      {colors.map((color) => (
        <ColorBox hexCode={color} handleClick={selectColor} key={color} />
      ))}
    </div>
  );
};

export default ColorPalette;
