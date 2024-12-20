import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
  bookingObject: null,
  previousBookings: [],
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    saveBooking(state, action) {
      state.bookingObject = action.payload;
    },
    addPreviousBooking(state, action) {
      state.previousBookings.push(action.payload);
      AsyncStorage.setItem(
        "previousBookings",
        JSON.stringify(state.previousBookings)
      );
    },
    clearAllPreviousBookings(state) {
      state.previousBookings = [];
      AsyncStorage.removeItem("previousBookings");
    },
  },
  extraReducers: builder => {
    builder
      .addCase(initializePreviousBookings.pending, state => {
        state.loading = true;
      })
      .addCase(initializePreviousBookings.fulfilled, (state, action) => {
        state.previousBookings = action.payload;
        state.loading = false;
      })
      .addCase(initializePreviousBookings.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Thunk to load previousBookings from AsyncStorage
// Create an async thunk to fetch previous bookings from AsyncStorage
export const initializePreviousBookings = createAsyncThunk(
  "booking/initializePreviousBookings",
  async (_, { rejectWithValue }) => {
    try {
      const storedBookings = await AsyncStorage.getItem("previousBookings");
      return storedBookings ? JSON.parse(storedBookings) : [];
    } catch (error) {
      console.error("Failed to load previous bookings:", error);
      return rejectWithValue(error.message); // Return the error if something goes wrong
    }
  }
);

export const { addPreviousBooking, clearAllPreviousBookings, saveBooking } =
  bookingSlice.actions;

export default bookingSlice.reducer;
