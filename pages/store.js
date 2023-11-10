// store.js
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./feature/favoritesSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

export default store;
