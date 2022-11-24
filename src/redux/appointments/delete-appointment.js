import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const REMOVE_APPOINTMENT = 'appointments/REMOVE_APPOINTMENT';
const initialState = [];

export const deleteAppointment = createAsyncThunk(
  REMOVE_APPOINTMENT,
  async (data) => {
    await fetch(`https://doctor-appointments-backend.herokuapp.com/api/v1/appointments/${data.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: data.token,
      },
    });
  },
);

const deleteAppointmentSlice = createSlice({
  name: 'removeAppointment',
  initialState,
  reducers: {
    deleteAppointment: (state) => state,
  },
});

export default deleteAppointmentSlice.reducer;
