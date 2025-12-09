import React from 'react';
import ProductListOf from './ProductListOf';

const Ofertas = () => {
  return (
    <div className="container">
      <h1>Ofertas de la semana</h1>
      <ProductListOf oferta="si" />
    </div>
  );
};

export default Ofertas;
