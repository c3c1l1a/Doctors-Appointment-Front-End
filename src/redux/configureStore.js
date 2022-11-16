import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import messagesReducer from './auth/login';

const rootReducer = combineReducers({
  messages: messagesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
