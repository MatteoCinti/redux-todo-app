import todosReducer from './todos.reducer';
import {
  removeTodo, clearTodos, toggleCompleted, updateTodo,
} from '../../actions/todos.actions';
import utils from './test.utils';
import * as uuid from 'uuid';

describe('Redux store', () => {
  jest.mock('uuid', () => {
    let value = 0;
    return () => value++;
   });

  test('should return the initial state', () => {
    expect(todosReducer(undefined, {})).toEqual([]);
  });

  test('deletes all todos', () => {
    const input = [utils.testState1, utils.testState2];
    expect(todosReducer(input, clearTodos())).toEqual([]);
  });

  test('toggles completed state', () => {
    const initialState = [utils.testState1, utils.testState2];

    let modifiedStore = todosReducer(initialState, toggleCompleted(0));
    expect(modifiedStore[0].completed).toEqual(true);
    modifiedStore = todosReducer(modifiedStore, toggleCompleted(1));
    expect(modifiedStore[1].completed).toEqual(true);
    modifiedStore = todosReducer(modifiedStore, toggleCompleted(1));
    expect(modifiedStore[1].completed).toEqual(false);
  });

  test('removes a node from the array', () => {
    const initialState = [utils.testState1, utils.testState2, utils.testState3, utils.testState4];
    const modifiedStore = todosReducer(initialState, removeTodo(2));
    expect(modifiedStore[2].title).toEqual(utils.testState4.title);
    expect(modifiedStore[2].id).toEqual(3);
  });

  test('it updates an existing todo', () => {
    const initialState = [utils.testState1, utils.testState2, utils.testState4];
    const index = 1;
    const newState = {
      id: index,
      title: 'Vai Franky',
      body: 'Pecco sta recuperando',
      category: 'GP',
    };
    const updatedTodo = {
      ...newState,
      completed: false,
      dueDate: '14-12-2055',
    };

    const modifiedStore = todosReducer(initialState, updateTodo(newState));
    expect(modifiedStore[1]).toStrictEqual(updatedTodo);
  });
});
