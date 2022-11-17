import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const LOGIN = 'auth/LOGIN';
const initialState = [];

export const login = createAsyncThunk(
  LOGIN,
  async (formData) => {
    const response = await fetch('http://localhost:3001/login/', {
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

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},
  extraReducers: {
    [login.fulfilled]: (state, action) => {
      if (action.payload.token) {
        localStorage.setItem('user', JSON.stringify(action.payload));
        return { success: 'You have been logged in successfully' };
      }

      return action.payload;
    },
  },
});

export default loginSlice.reducer;
