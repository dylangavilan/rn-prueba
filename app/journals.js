import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { journalsBaseUrl } from '../config';

export const fetchJournals = createAsyncThunk('fetchJournals', async () => {
  try {
    const response = await axios.get(journalsBaseUrl);
    return response.data.message.items;
  } catch (error) {
    throw error;
  }
});

const journalsSlice = createSlice({
  name: 'journals',
  initialState: {
    data: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchJournals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJournals.fulfilled, (state, action) => {
        state.status = 'success';
        state.data = action.payload;
      })
      .addCase(fetchJournals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getJournalsState = (state) => state.journals;


export default journalsSlice.reducer;