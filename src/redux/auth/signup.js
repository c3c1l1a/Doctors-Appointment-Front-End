import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SIGNUP = 'auth/SIGNUP';
const initialState = [];

export const signup = createAsyncThunk(
  SIGNUP,
  async (formData) => {
    const response = await fetch('https://doctor-appointments-backend.herokuapp.com/api/v1/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    response.data = await response.json();

    return response.data;
  },
);

const signupSlice = createSlice({
  name: 'signup',
  initialState,
  reducers: {},
  extraReducers: {
    [signup.fulfilled]: () => ({ success: 'Successfully signed up, you can now login' }),
  },
});

export default signupSlice.reducer;
