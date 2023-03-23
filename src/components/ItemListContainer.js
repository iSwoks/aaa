import React from "react";
import Item from "./Item";

const productList = [
  {
    id: 1,
    title: "Producto 1",
    description: "Descripción del producto 1",
    price: 10.0,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "Producto 2",
    description: "Descripción del producto 2",
    price: 20.0,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "Producto 3",
    description: "Descripción del producto 3",
    price: 30.0,
    image: "https://via.placeholder.com/150",
  },
];

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container">
      <h1 className="text-center">{greeting}</h1>
      <div className="row">
        {productList.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <Item
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
