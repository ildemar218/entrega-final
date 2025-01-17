import React from 'react';

const ProductCard = ({ product, onView }) => (
  <div className="card">
    <img src={product.image} alt={product.name} className="card-img-top" />
    <div className="card-body">
      <h5 className="card-title">{product.name}</h5>
      <button className="btn btn-danger" onClick={onView}>
        Ver detalles
      </button>
    </div>
  </div>
);

export default ProductCard;
