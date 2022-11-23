import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const NEW_DOCTOR = 'auth/NEW_DOCTOR';
const initialState = [];

export const newDoctor = createAsyncThunk(
  NEW_DOCTOR,
  async (data) => {
    const { token, ...remainingData } = data;
    const response = await fetch('http://localhost:3001/api/v1/doctors', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(remainingData),
    });
    await response.json();
  },
);

const newDoctorSlice = createSlice({
  name: 'newDoctor',
  initialState,
  reducers: {},
  extraReducers: {
    [newDoctor.fulfilled]: () => ({ success: 'Successfully Created a new doctor' }),
  },
});

export default newDoctorSlice.reducer;
