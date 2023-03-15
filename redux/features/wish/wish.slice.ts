import { RootState } from "./../../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../../types";

export interface WishState {
  wishItems: Product[];
}

const initialState: WishState = {
  wishItems: [],
};

export const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    setWishItems: (state, action: PayloadAction<Product[]>) => {
      state.wishItems = action.payload;
    },
    removeWishItem: (state, action: PayloadAction<string>) => {
      state.wishItems = state.wishItems.filter((product) =>
        product.likes.filter((like) => like.id != action.payload)
      );
    },
    clearWish: (state) => {
      state.wishItems = [];
    },
  },
});

export const { setWishItems, removeWishItem, clearWish } = wishSlice.actions;

export const selectWishItems = (state: RootState) => state.wish.wishItems;

export default wishSlice.reducer;
