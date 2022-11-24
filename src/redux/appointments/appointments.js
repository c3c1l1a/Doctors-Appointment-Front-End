import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const ALL_APPOINTMENT = 'appointments/ALL_APPOINTMENT';
const initialState = [];

export const getAppointments = createAsyncThunk(
  ALL_APPOINTMENT,
  async (data) => {
    const response = await fetch('https://doctor-appointments-backend.herokuapp.com/api/v1/appointments', {
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

const getAppointmentsSlice = createSlice({
  name: 'newAppointment',
  initialState,
  reducers: {},
  extraReducers: {
    [getAppointments.fulfilled]: () => ({ success: 'Successfully loaded all appointments' }),
  },
});

export default getAppointmentsSlice.reducer;
