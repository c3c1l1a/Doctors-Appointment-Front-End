import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const LOGIN = 'auth/LOGIN';
const initialState = {};

export const login = createAsyncThunk(
  LOGIN,
  async (formData) => {
    const response = await fetch('https://doctor-appointments-backend.herokuapp.com/login/', {
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
        return action.payload;
      }

      return action.payload;
    },
  },
});

export default loginSlice.reducer;
