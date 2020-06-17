import React from 'react';
import './Button.scss';

const Button = (props) => {
  return <button className={props.className}>{props.text}</button>;
};

export default Button;
