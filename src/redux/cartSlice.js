import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existing = state.items.find(
        (item) =>
          item.name === action.payload.name &&
          item.price === action.payload.price
      );

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      console.log(state.items);
    },
    removeFromCart: (state, action) => {
      console.log(state.items, action.payload);
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter((item) => item.id != action.payload);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const update = state.items.find((item) => item.id === id);
      if (update) {
        0;
        update.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
