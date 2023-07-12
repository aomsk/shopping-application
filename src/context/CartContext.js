import { createContext, useContext } from "react";

// สร้าง Context
const CartContext = createContext();
// export context ออกไปใช้งาน
export const useCart = () => {
  return useContext(CartContext);
};
