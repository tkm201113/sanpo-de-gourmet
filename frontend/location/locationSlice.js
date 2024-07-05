import { createSlice } from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    latitude: null,
    longitude: null,
    places: []
  },
  reducers: {
    setLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
    },
    setPlaces: (state, action) => {
      state.places = action.payload;
    }
  }
});

export const { setLocation, setPlaces } = locationSlice.actions;

export default locationSlice.reducer;