import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const NEW_APPOINTMENT = 'appointments/NEW_APPOINTMENT';
const initialState = [];

export const newAppointment = createAsyncThunk(
  NEW_APPOINTMENT,
  async (formData) => {
    const { token, ...remainingFormData } = formData;

    const response = await fetch('http://localhost:3001/api/v1/appointments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(remainingFormData),
    });
    response.data = await response.json();

    return response.data;
  },
);

const newAppointmentSlice = createSlice({
  name: 'newAppointment',
  initialState,
  reducers: {},
  extraReducers: {
    [newAppointment.fulfilled]: () => ({ success: 'Successfully signed up, you can now login' }),
  },
});

export default newAppointmentSlice.reducer;
