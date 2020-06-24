import React from 'react';
import './Success.scss';

const Success = () => {
  return (
    <div className="success-container">
      <h2>Sweet success!</h2>
      <p>Custom order has been added to cart.</p>
      <a
        href="https://chelseaandthechocolatefactory.com/collections/all"
        title="catalog"
      >
        <p>Return to catalog</p>
      </a>
    </div>
  );
};

export default Success;
