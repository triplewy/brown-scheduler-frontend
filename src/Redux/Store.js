import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Root.reducer.js'
import thunk from 'redux-thunk'

export function configureStore() {
  return createStore(rootReducer, applyMiddleware(thunk))
}
