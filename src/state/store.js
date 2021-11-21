import { createStore, applyMiddleware, compose  } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { loadLocaStorageState, saveStateToLocaStorage } from './localStorage';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initialState = loadLocaStorageState();

const store = createStore(
  rootReducer, 
  initialState, 
  composeEnhancers(
    applyMiddleware(thunk),
  )
);

store.subscribe(() => {
  saveStateToLocaStorage(store.getState());
})

export default store;
