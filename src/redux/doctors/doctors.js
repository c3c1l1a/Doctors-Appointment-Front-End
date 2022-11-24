import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ALL_DOCTORS = 'doctors/ALL_DOCTORS';
const initialState = [];

export const getDoctors = createAsyncThunk(
  ALL_DOCTORS,
  async (data) => {
    const response = await fetch('http://localhost:3001/api/v1/doctors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: data.token,
      },
    });
    response.data = await response.json();
    return response.data;
  },
);

const getDoctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    getSingleDoctor: (state, action) => action.payload,
  },
  extraReducers: {
    [getDoctors.fulfilled]: (state, action) => action.payload,
  },
});

export const { getSingleDoctor } = getDoctorsSlice.actions;
export default getDoctorsSlice.reducer;
