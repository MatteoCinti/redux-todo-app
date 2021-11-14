import { combineReducers } from 'redux';
import todosReducer from './todos/todos.reducer.js'
import categoriesRootReducer from './categories'

const rootReducer = combineReducers({
  todos: todosReducer,
  categories: categoriesRootReducer
})

export default rootReducer;