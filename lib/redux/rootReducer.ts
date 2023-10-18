/* Instruments */
import { combineReducers } from '@reduxjs/toolkit'
import { counterSlice } from './slices'

export const rootReducer: any = combineReducers({
  counter: counterSlice.reducer,
});
