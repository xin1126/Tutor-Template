import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  count: 0,
}

const count = createSlice({
  name: 'count',
  initialState,
  reducers: {
    addCount: (state) => {
      state.count++
    },
    reduceCount: (state) => {
      state.count--
    },
  },
})

export const { addCount, reduceCount } = count.actions
export default count.reducer
