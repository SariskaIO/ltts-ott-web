// // Assuming you have a slice named `hlsSlice.js`
// import { createSlice } from '@reduxjs/toolkit';

// const hlsSlice = createSlice({
//   name: 'hls',
//   initialState: {
//     urls: [] // Array of HLS URLs
//   },
//   reducers: {
//     setHlsUrls(state, action) {
//       state.urls = action.payload;
//     },
//     addHlsUrl(state, action) {
//       state.urls.push(action.payload);
//     },
//     removeHlsUrl(state, action) {
//       state.urls = state.urls.filter(url => url !== action.payload);
//     }
//   }
// });

// export const { setHlsUrls, addHlsUrl, removeHlsUrl } = hlsSlice.actions;
// export default hlsSlice.reducer;

// // Selector to get HLS URLs
// export const selectHlsUrls = state => state.hls.urls;
