import React from "react";
import "../styles/Item.css";

export default function Item({ id, name, image, price, quantity }) {
  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="product">
        <p className="name">Product Name : {name}</p>
        <p className="price">Product Price : {price} Baht</p>
      </div>
      <div className="quantity">
        <button type="button">+</button>
        <input type="text" value={quantity} disabled />
        <button type="button">-</button>
      </div>
      <div className="total-price">{quantity * price}</div>
      <button type="button" className="delete-btn">
        Delete
      </button>
    </div>
  );
}
