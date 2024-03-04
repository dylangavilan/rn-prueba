
import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
        state.isAuthenticated = true;
    },
    logout: (state) => {
        state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;

export const getAuthState = (state) => state.user;

export default userSlice.reducer;
