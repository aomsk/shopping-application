import React from "react";
import "../styles/Header.css";
import { useCart } from "../context/CartContext";

export default function Header() {
  const { amount } = useCart();
  return (
    <header>
      <h3>Shopping Application</h3>
      <p>In Cart : {amount}</p>
    </header>
  );
}
