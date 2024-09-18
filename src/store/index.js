import { configureStore } from '@reduxjs/toolkit';
import hlsReducer from '../reducer/hlsReducer';

const store = configureStore({
    reducer: {
      hls: hlsReducer,
    },
  });
export default store;
