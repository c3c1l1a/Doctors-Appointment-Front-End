import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SIGNUP = 'auth/SIGNUP';
const initialState = [];

export const signup = createAsyncThunk(
  SIGNUP,
  async (formData) => {
    const response = await fetch('http://localhost:3001/api/v1/users', {
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
    [signup.fulfilled]: (state, action) => action.payload,
  },
});

export default signupSlice.reducer;
