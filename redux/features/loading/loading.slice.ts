import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

export interface LoadingState {
  isLoading: boolean;
}

const initialState = {
  isLoading: false,
};

export const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;

export const selectLoading = (state: RootState) => state.loading.isLoading;

export default loadingSlice.reducer;
