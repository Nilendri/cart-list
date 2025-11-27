import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addProducts } = productSlice.actions;
export default productSlice.reducer;
