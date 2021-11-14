import { toggleCompleted, removeTodo } from '../../state/actions/todos.actions';

const dispatchToggleCompleted = (e, todoId, dispatch) => {
  e.stopPropagation();
  return dispatch(toggleCompleted(todoId));
};

const dispatchRemoveTodo = (e, todoId, dispatch) => {
  e.stopPropagation();
  return dispatch(removeTodo(todoId));
};

const utils = {
  toggleCompleted: dispatchToggleCompleted,
  removeTodo: dispatchRemoveTodo,
};
export default utils;
