
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "reduxjs-toolkit-persist";
import storage from "reduxjs-toolkit-persist/lib/storage";
import { sessionSlice, sessionSliceName } from "./session";
import { countSlice, countSliceName } from "./count";

export const persistConfig = {
  key: "vite-mpa-react-bootstrap-redux-toolkit",
  storage,
};

export const rootReducer = combineReducers({
  [sessionSliceName]: sessionSlice.reducer,
  [countSliceName]: countSlice.reducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }),
});

export const persistor = persistStore(store);

export default store;
