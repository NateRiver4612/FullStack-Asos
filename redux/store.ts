import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/search.slice";
import storage from "redux-persist/lib/storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const rootReducer = combineReducers({
  search: searchReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["search"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
// RootState type and the Dispatch type will be extracted so that they can be referenced as needed
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
