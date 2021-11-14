import { addTodo, updateTodo } from '../../state/actions/todos.actions';

const dispatchAddTodo = (todoValue, dispatch) => dispatch(addTodo(todoValue));

const dispatchUpdateTodo = (todoValue, dispatch) => dispatch(updateTodo(todoValue));

const utils = {
  addTodo: dispatchAddTodo,
  updateTodo: dispatchUpdateTodo,
};
export default utils;
