import { configureStore } from '@reduxjs/toolkit';
import AddressReducer from './slices/address/addressSlice';

export const store = configureStore({
  reducer: {
    value: AddressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
