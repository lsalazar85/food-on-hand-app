import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddressState } from '../../../interfaces';

const initialState: AddressState = {
  addressName: '',
  latitude: 0,
  longitude: 0,
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<AddressState>) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setAddress } = addressSlice.actions;
export default addressSlice.reducer;
