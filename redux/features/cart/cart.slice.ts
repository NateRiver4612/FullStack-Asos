import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../../types";

export interface CartState {
  cartItems: Cart[];
}

const initialState: CartState = {
  cartItems: [],
};

interface removeCart_Input {
  userId: string;
  productId: string;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeCartItem: (state, action: PayloadAction<removeCart_Input>) => {
      const { userId, productId } = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) =>
          product.id != productId &&
          product.likes.filter((like) => like.id != userId)
      );
    },
  },
});

export const { addToCart, removeCartItem } = cartSlice.actions;

export const selectCartItems = createSelector(
  [(state) => state.cart.cartItems, (state, userId) => userId],
  (cartItems, userId) =>
    cartItems.filter((product) =>
      product.likes.find((like) => like.id == userId)
    )
);

export const selectAllCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
