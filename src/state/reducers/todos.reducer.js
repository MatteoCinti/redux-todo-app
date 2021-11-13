import { ADD_TODO } from '../types'

const todosListReducer = (state = [], action) => {
  switch(action.type) {
    case ADD_TODO:
      return state.push(action.todoObject);
    default:
      return state;
  }
}

export default todosListReducer;