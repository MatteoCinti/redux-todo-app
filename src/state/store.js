import { createStore, applyMiddleware, compose } from 'redux'
import rootReducers from './reducers/index'
import thunk from 'redux-thunk'

const store = createStore(
  rootReducers,
  compose(
    applyMiddleware(thunk), 
    window.reduxDevToolsExtension ? window.reduxDevToolsExtension : undefined
  )
);

// store.subscribe(() => console.log(store.getState));

export default store;