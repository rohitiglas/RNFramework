import {createSlice} from '@reduxjs/toolkit';
import {fetchData} from './actions/swiggyAction';

// reducers.js

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    data: null,
    error: null,
    isLoading: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchData.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.isLoading = false;
        state.data = null;
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
