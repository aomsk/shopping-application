import { createContext, useContext, useReducer } from "react";
import products from "../data/products";
import CartReducer from "../reducer/CartReducer";

const CartContext = createContext();
const initState = {
  products: products,
  total: 0,
  amout: 0,
};

export const CartProvider = ({ children }) => {
  const { state, dispatch } = useReducer(CartReducer, initState);
  return <CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  return useContext(CartContext);
};
