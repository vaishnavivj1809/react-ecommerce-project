import React from "react";

function ProductCard(props) {
  return (
    <div className="card h-100">
      <img
        src={props.product.image}
        className="card-img-top"
        alt={props.product.name}
      />

      <div className="card-body">
        <h5 className="card-title">{props.product.name}</h5>
        <p className="card-text">Price: ₹{props.product.price}</p>
        <p className="card-text">{props.product.category}</p>
      </div>
    </div>
  );
}

export default ProductCard;
