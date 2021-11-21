import { addTodo, updateTodo } from '../../state/actions/todos.actions';
import { addCategory } from '../../state/actions/categories.actions'

const dispatchAddTodo = (todoValue, dispatch) => dispatch(addTodo(todoValue));

const dispatchUpdateTodo = (todoValue, dispatch) => dispatch(updateTodo(todoValue));

const dispatchAddCategory = (newCategory, dispatch) => dispatch(addCategory(newCategory))


const utils = {
  addTodo: dispatchAddTodo,
  updateTodo: dispatchUpdateTodo,
  addCategory: dispatchAddCategory,
};
export default utils;