import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Cart } from "../../../types";

export interface CartState {
  cartItems: Cart[];
}

const initialState: CartState = {
  cartItems: [],
};

interface removeCart_Input {
  productId: string;
}

interface setQty_Input {
  productId: string;
  quantity: Number;
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Cart>) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    setCartItems: (state, action: PayloadAction<[Cart]>) => {
      state.cartItems = action.payload;
    },
    removeCartItem: (state, action: PayloadAction<removeCart_Input>) => {
      const { productId } = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) => product.id != productId
      );
    },
    setQuantity: (state, action: PayloadAction<setQty_Input>) => {
      const { productId, quantity } = action.payload;

      state.cartItems = state.cartItems.map((product) => {
        if (product.id == productId) {
          product.quantity = quantity;
        }
        return product;
      });
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const {
  setCartItems,
  addToCart,
  removeCartItem,
  setQuantity,
  clearCart,
} = cartSlice.actions;

export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
