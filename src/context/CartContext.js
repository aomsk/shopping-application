import { createContext, useContext, useReducer, useEffect } from "react";
import CartReducer from "../reducer/CartReducer";
import products from "../data/products";

const CartContext = createContext();

const initState = {
  products: products,
  total: 0,
  amount: 0,
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initState);

  function formatMoney(money) {
    return money.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  function removeItem(id) {
    console.log("Remove ID: ", id);
    dispatch({ type: "REMOVE_ITEM", payload: id });
  }

  function addQuantity(id) {
    console.log("Add quantity ID: ", id);
    dispatch({ type: "ADD_QUANTITY", payload: id });
  }

  function subTractQuantity(id) {
    console.log("SubTract quantity ID: ", id);
    dispatch({ type: "SUBTRACT_QUANTITY", payload: id });
  }

  useEffect(() => {
    console.log("Calculate Total Price");
    dispatch({ type: "CALCULATE_TOTAL" });
  }, [state.products]);

  return (
    <CartContext.Provider
      value={{ ...state, formatMoney, removeItem, addQuantity, subTractQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
