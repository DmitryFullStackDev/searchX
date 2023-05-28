import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { categories } from '../data/content'

export const predictions = createSlice({
  name: 'predictions',
  initialState: categories as string[],
  reducers: {
    removeItem: (state, { payload }: PayloadAction<string>) => state.filter(el => el !== payload),
  },
})

export const { removeItem } = predictions.actions
