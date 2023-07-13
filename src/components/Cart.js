import React from "react";
import Item from "./Item";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

export default function Cart() {
  const { products } = useCart();
  console.log("products: ", products);

  return (
    <div className="cart-container">
      {products.map((product) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
}
