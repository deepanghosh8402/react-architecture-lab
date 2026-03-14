import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "Laptop", price: 600, category: "electronics" },
    { id: 2, name: "Phone", price: 1000, category: "electronics" },
    { id: 3, name: "Table", price: 200, category: "furniture" }
  ]
};

const productSlice = createSlice({
  name: "ramdaProducts",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },

    removeProduct: (state, action) => {
      state.items = state.items.filter(p => p.id !== action.payload);
    },

    updatePrice: (state, action) => {
      const product = state.items.find(p => p.id === action.payload.id);
      if (product) {
        product.price = action.payload.price;
      }
    }
  }
});

export const { addProduct, removeProduct, updatePrice } = productSlice.actions;

export default productSlice.reducer;