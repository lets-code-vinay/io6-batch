import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "flipkart",
  initialState: {
    userData: {},
    products: [],
    selectedProduct: {},
    cartItems: [],
  },

  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setCartItems: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { setUserData, setProducts, setSelectedProduct, setCartItems } =
  appSlice.actions;

export default appSlice.reducer;
