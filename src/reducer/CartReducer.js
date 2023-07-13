const CartReducer = (state, action) => {
  // จัดการ state ผ่าน action
  if (action.type === "CALCULATE_TOTAL") {
    const { total, amount } = state.products.reduce(
      (cartTotal, item) => {
        const { price, quantity } = item;
        const totalPrice = price * quantity; // ยอดรวมสินค้าแต่ละรายการ
        cartTotal.total += totalPrice; // จำนวนเงินรวม
        cartTotal.amount += quantity; // ปริมาณรวม
        return cartTotal;
      },
      {
        // กำหนดค่าเริ่มต้นไปที่ cartTotal
        total: 0,
        amount: 0,
      }
    );
    return {
      ...state,
      total,
      amount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      products: state.products.filter((item) => item.id !== action.payload),
    };
  }
  // return state;
};

export default CartReducer;
