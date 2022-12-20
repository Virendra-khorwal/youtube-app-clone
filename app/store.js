import { configureStore } from "@reduxjs/toolkit";

import videoLoadReducer from './features/videoLoadSlice'

export default configureStore({
  reducer: {
    videoLoad: videoLoadReducer
  },
});
