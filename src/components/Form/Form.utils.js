import { addTodo, updateTodo } from '../../state/actions/todos.actions'

const dispatchAddTodo = (todoValue, dispatch) => { 
  return dispatch(addTodo(todoValue))
}

const dispatchUpdateTodo = (todoValue, dispatch) => { 
  return dispatch(updateTodo(todoValue))
}

export default {
  addTodo: dispatchAddTodo,
  updateTodo: dispatchUpdateTodo
}