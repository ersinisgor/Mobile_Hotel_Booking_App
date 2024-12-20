import { createSlice } from "@reduxjs/toolkit";

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
    },
  },
});

export const { saveBooking, addPreviousBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
