import store from './store.js';
import { addTodo, clearTodos, toggleCompleted, removeTodo } from './actions/todos.actions';
import todosReducer from './reducers/todos/todos.reducer';

describe('Redux store', () => {
  it('gets todos', () => {
    const todos = store.getState().todos;
    expect(todos).toEqual([]);
  });
});

