import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { newspapersBaseUrl } from '../config';

export const fetchData = createAsyncThunk('fetchData', async () => {
  try {
    const response = await axios.get(newspapersBaseUrl);
    return response.data.newspapers;
  } catch (error) {
    throw error;
  }
});

const newspapersSlice = createSlice({
  name: 'news',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getNewsState = (state) => state.newspapers;


export default newspapersSlice.reducer;