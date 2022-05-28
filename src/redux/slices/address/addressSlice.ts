import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AddressState {
  address: string;
}

const initialState: AddressState = {
  address: '',
};

export const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;
