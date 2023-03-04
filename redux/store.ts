import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/search/search.slice";
import wishReducer from "./features/wish/wish.slice";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  wish: wishReducer,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["search", "wish"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const makeConfiguredStore = () =>
  configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

const isServer = typeof window === "undefined";

let ConfigureStore;

if (isServer) {
  ConfigureStore = makeConfiguredStore();
} else {
  ConfigureStore = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
}

export const store = ConfigureStore;

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
// RootState type and the Dispatch type will be extracted so that they can be referenced as needed
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
