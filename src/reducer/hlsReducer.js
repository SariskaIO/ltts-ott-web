//reducer/hlsReducer.js
import { createSlice } from '@reduxjs/toolkit';

const hlsReducer = createSlice({
  name: 'hls',
  initialState: {
    urls: [],
  },
  reducers: {
    addHlsUrl: (state, action) => {
      state.urls.push(action.payload);
    },
    editHlsUrl: (state, action) => {
      const { index, newUrl } = action.payload;
    
      if (index >= 0 && index < state.urls.length) {
        state.urls.splice(index, 1, newUrl);
      } else {
        console.error("Index out of bounds for editing HLS URL.");
      }
    },
    removeHlsUrl: (state, action) => {
      state.urls = state.urls.filter((_, index) => index !== action.payload);
    },
  },
});

export const { addHlsUrl, editHlsUrl, removeHlsUrl } = hlsReducer.actions;
export default hlsReducer.reducer;
// export const selectHlsUrls = state => state.hls.urls;

