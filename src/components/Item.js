import React from "react";
import "../styles/Item.css";
import { useCart } from "../context/CartContext";

export default function Item({ id, name, image, price, quantity }) {
  const { formatMoney, removeItem } = useCart();

  return (
    <div className="card">
      <img src={image} alt={id} />
      <div className="product">
        <p className="name">Product Name : {name}</p>
        <p className="price">Product Price : {formatMoney(price)} Baht</p>
      </div>
      <div className="quantity">
        <button type="button">+</button>
        <input type="text" value={quantity} disabled />
        <button type="button">-</button>
      </div>
      <div className="total-price">{formatMoney(quantity * price)}</div>
      <button type="button" className="delete-btn" onClick={() => removeItem(id)}>
        Delete
      </button>
    </div>
  );
}
