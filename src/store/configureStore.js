import { createStore, combineReducers } from 'redux'
//import thunk from 'redux-thunk'
import notesReducer from '../reducers/notes'
import filtersReducer from '../reducers/filters'

//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      notes: notesReducer,
      filters: filtersReducer
    }),
    //composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
