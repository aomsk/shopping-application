import React from "react";
import Item from "./Item";
import { useCart } from "../context/CartContext";
import "../styles/Cart.css";

export default function Cart() {
  const { products, total, formatMoney } = useCart();

  return (
    <div className="cart-container">
      <h1 style={{ textAlign: "center" }}>
        {products.length > 0 ? `Total Price: ${formatMoney(total)} Baht` : "No Item in Cart"}
      </h1>
      {products.map((product) => {
        return <Item key={product.id} {...product} />;
      })}
    </div>
  );
}
