import { configureStore } from '@reduxjs/toolkit';
import AddressReducer from './slices/address/addressSlice';

export const store = configureStore({
  reducer: {
    value: AddressReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;

export const addressData = (state: RootState) => state.value;
export type AppDispatch = typeof store.dispatch
