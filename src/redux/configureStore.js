import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import loginReducer from './auth/login';
import signupReducer from './auth/signup';
import getAppointmentsReducer from './appointments/appointments';
import getDoctorsReducer from './doctors/doctors';

const rootReducer = combineReducers({
  login: loginReducer,
  signup: signupReducer,
  appoitments: getAppointmentsReducer,
  doctors: getDoctorsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
