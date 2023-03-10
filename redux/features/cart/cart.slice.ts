import { RootState } from "./../../store";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../../types";

export interface CartState {
  cartItems: Cart[];
}

const initialState: CartState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
  },
});

export const { addToCart } = cartSlice.actions;

export const selectCartItems = createSelector(
  [(state) => state.cart.cartItems, (state, userId) => userId],
  (cartItems, userId) =>
    cartItems.filter((product) =>
      product.likes.find((like) => like.id == userId)
    )
);

export const selectAllCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
