import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ALL_DOCTORS = 'appointments/ALL_APPOINTMENT';
const initialState = [];

export const getDoctors = createAsyncThunk(
  ALL_DOCTORS,
  async (data) => {
    const response = await fetch('https://doctor-appointments-backend.herokuapp.com/api/v1/doctors', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: data.token,
      },
    });
    response.data = await response.json();
    console.log(response.data);
    return response.data;
  },
);

const getDoctorsSlice = createSlice({
  name: 'newDoctors',
  initialState,
  reducers: {},
  extraReducers: {
    [getDoctors.fulfilled]: () => ({ success: 'Successfully loaded all doctors' }),
  },
});

export default getDoctorsSlice.reducer;
