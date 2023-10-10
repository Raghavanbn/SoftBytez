// store.js
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './rootReducer'; // Your root reducer

const store = configureStore({
    reducer: rootReducer
  })

export default store;
