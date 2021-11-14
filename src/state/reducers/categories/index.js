import { combineReducers } from 'redux';
import categoriesReducer from './categories.reducer';
import filterReducer from './filter.reducer';

const categoriesRootReducer = combineReducers({
  filter: filterReducer,
  categories: categoriesReducer
})

export default categoriesRootReducer