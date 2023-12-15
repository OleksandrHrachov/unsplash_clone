import { configureStore } from '@reduxjs/toolkit';
import viewReducer from './viewSlice';

const store = configureStore({
  reducer: {
    viewSlice: viewReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
