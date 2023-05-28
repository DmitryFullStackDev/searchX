import { combineReducers } from 'redux'
import { predictions } from './slices'

export default combineReducers({
  predictions: predictions.reducer,
})
