import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "flipkart",
  initialState: {
    userData: {},
    products: [],
    selectedProduct: {},
  },

  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setProducts: (state, action) => {
      console.log("action setProducts", action);
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      console.log("action selectedProduct", action);
      state.selectedProduct = action.payload;
    },
  },
});

export const { setUserData, setProducts, setSelectedProduct } =
  appSlice.actions;

export default appSlice.reducer;
