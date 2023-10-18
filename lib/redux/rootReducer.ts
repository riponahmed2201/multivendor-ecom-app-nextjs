/* Instruments */
import { counterSlice } from './slices'

export const rootReducer = {
  counter: counterSlice.reducer,
}
