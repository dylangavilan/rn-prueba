import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { cryptoBaseUrl } from '../config';

export const fetchCrypto = createAsyncThunk('fetchCrypto', async () => {
  try {
    const response = await axios.get(cryptoBaseUrl);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCrypto.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCrypto.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(fetchCrypto.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getCryptoState = (state) => state.crypto;


export default cryptoSlice.reducer;