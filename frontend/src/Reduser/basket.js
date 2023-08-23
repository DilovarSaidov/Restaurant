import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    summa: 0,
    loading: false,
    error: null,
  },
  reducers: {
    addProduct: (state, action) => {
      if (!state.basket.find((elem) => elem.product.id === action.payload.id)) {
        state.basket.push({
          product: action.payload,
          quantity: 1,
        });
        state.summa = state.basket.reduce(
          (acc, curr) => acc + curr.product.price * curr.quantity,
          0
        );
        return;
      }
      let product = state.basket.find(
        (elem) => elem.product.id === action.payload.id
      );
      product.quantity++;
      state.summa = state.basket.reduce(
        (acc, curr) => acc + curr.product.price * curr.quantity,
        0
      );
    },
    removeProduct: (state, action) => {
      state.basket = state.basket.filter(
        (elem) => elem.product.id !== action.payload
      );
    },
    decProduct: (state, action) => {
      let product = state.basket.find(
        (elem) => elem.product.id === action.payload
      );
      if (product.quantity > 0) product.quantity--;
      state.summa = state.basket.reduce(
        (acc, curr) => acc + curr.product.price * curr.quantity,
        0
      );
    },
    incProduct: (state, action) => {
      let product = state.basket.find(
        (elem) => elem.product.id === action.payload
      );
      product.quantity++;
      state.summa = state.basket.reduce(
        (acc, curr) => acc + curr.product.price * curr.quantity,
        0
      );
    },
  },
});

export const { addProduct, removeProduct, incProduct, decProduct } =
  slice.actions;

export default slice.reducer;
