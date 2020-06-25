import React from 'react';
import { Link } from '@reach/router';
import './Success.scss';

const Success = () => {
  return (
    <div className="success-container">
      <h2>Sweet success!</h2>
      <p>Custom order has been added to cart.</p>
      <Link to="/">
        <p className="success-link">Create another</p>
      </Link>
      <p className="success-link">|</p>
      <a
        href="https://chelseaandthechocolatefactory.com/collections/all"
        title="catalog"
      >
        <p className="success-link">Return to catalog</p>
      </a>
    </div>
  );
};

export default Success;
