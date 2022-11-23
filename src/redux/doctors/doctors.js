import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ALL_DOCTORS = 'appointments/ALL_DOCTORS';
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
  name: 'newAppointment',
  initialState,
  reducers: {},
  extraReducers: {
    [getDoctors.fulfilled]: () => ({ success: 'Successfully loaded all appointments' }),
  },
});

export default getDoctorsSlice.reducer;
