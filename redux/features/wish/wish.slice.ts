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
      state.wishItems = state.wishItems.filter(
        (item) => item.id != action.payload
      );
    },
  },
});

export const { setWishItems, removeWishItem } = wishSlice.actions;

export const selectWishItems = (state: RootState) => state.wish.wishItems;

export default wishSlice.reducer;
