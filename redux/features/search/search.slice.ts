import { RootState } from "./../../store";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  history: string[];
}

const initialState: CounterState = { history: [] };

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    addToHistory(state, action: PayloadAction<string>) {
      state.history = [...state.history, action.payload];
    },
    clearHistory(state) {
      state.history = [];
    },
  },
});

export const selectSearch = (state: RootState) => state.search.history;

export const { addToHistory, clearHistory } = searchSlice.actions;

export default searchSlice.reducer;
