import { configureStore } from "@reduxjs/toolkit";
import bookingReducer from "./bookingSlice";
import favoritesReducer from "./favoritesSlice";

const store = configureStore({
  reducer: {
    booking: bookingReducer,
    favorites: favoritesReducer,
  },
});

export default store;
