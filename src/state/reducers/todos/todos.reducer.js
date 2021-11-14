import {
  ADD_TODO, CLEAR_TODOS, TOGGLE_COMPLETED, REMOVE_TODO, UPDATE_TODO,
} from '../../types';

const nextId = state => state.length;

const addTodo = (todo, oldState) => [
  ...oldState,
  {
    ...todo,
    id: nextId(oldState),
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
  updatedState.forEach((todo, i) => { todo.id = i; });
  return [...updatedState];
};

const toggleCompleted = (id, oldState) => {
  const foundIndex = oldState.findIndex(todo => todo.id === id);
  oldState[foundIndex].completed = !oldState[foundIndex].completed;
  return [...oldState];
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
