import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import loginReducer from './auth/login';
import signupReducer from './auth/signup';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
