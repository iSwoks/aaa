import React from "react";

const Item = ({ title, description, price }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">${price}</p>
        <a href="./ItemListContainer" className="btn btn-primary">
          Agregar al carrito
        </a>
      </div>
    </div>
  );
};

export default Item;
