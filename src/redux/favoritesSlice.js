import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

// AsyncThunk to load favorites from AsyncStorage
export const loadFavorites = createAsyncThunk(
  "favorites/loadFavorites",
  async () => {
    const savedFavorites = await AsyncStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  }
);

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const hotel = action.payload;
      if (!state.find(item => item.id === hotel.id)) {
        const updatedState = [...state, hotel];
        AsyncStorage.setItem("favorites", JSON.stringify(updatedState));
        return updatedState;
      }
    },
    removeFavorite: (state, action) => {
      const updatedState = state.filter(item => item.id !== action.payload);
      AsyncStorage.setItem("favorites", JSON.stringify(updatedState));
      return updatedState;
    },
  },
  extraReducers: builder => {
    builder.addCase(loadFavorites.fulfilled, (state, action) => {
      return action.payload; // Replace state with the loaded favorites
    });
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
