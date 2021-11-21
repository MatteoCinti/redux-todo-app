import {
  ADD_TODO, CLEAR_TODOS, TOGGLE_COMPLETED, REMOVE_TODO, UPDATE_TODO,
} from '../../types';
import { v4 as uuidv4 } from 'uuid';

const addTodo = (todo, oldState) => [
  ...oldState,
  {
    ...todo,
    id: uuidv4(),
    completed: false,
  },
];

const updateTodo = (newTodo, oldState) => {
  const foundIndex = oldState.findIndex(todo => todo.id === newTodo.id);
  const updatedState = oldState;
  updatedState[foundIndex] = {
    ...updatedState[foundIndex],
    ...newTodo,
  };
  return [...updatedState];
};

const removeTodo = (id, oldState) => {
  const foundIndex = oldState.findIndex(todo => todo.id === id);
  const updatedState = oldState;
  updatedState.splice(foundIndex, 1);
  return [...updatedState];
};

const toggleCompleted = (id, oldState) => {
  const foundIndex = oldState.findIndex(todo => todo.id === id);
  const updatedState = oldState;
  updatedState[foundIndex].completed = !updatedState[foundIndex].completed;
  return [...updatedState];
};

const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return addTodo(action.todoObject, state);

    case UPDATE_TODO:
      return updateTodo(action.updatedTodo, state);

    case TOGGLE_COMPLETED:
      return toggleCompleted(action.todoId, state);

    case REMOVE_TODO:
      return removeTodo(action.todoId, state);

    case CLEAR_TODOS:
      return [];

    default:
      return state;
  }
};

export default todosReducer;
