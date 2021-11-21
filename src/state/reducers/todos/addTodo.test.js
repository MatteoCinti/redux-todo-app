import todosReducer from './todos.reducer';
import { addTodo } from '../../actions/todos.actions';
import utils from './test.utils';
import { v4 } from 'uuid';
jest.mock('uuid');

describe('Adding a todo handles', () => {
  test('a todo being added to an empty list', () => {
    v4.mockImplementation(() => 0);
    const previousState = [];
    const expectedState = [utils.testState1];
    expect(todosReducer(previousState, addTodo(utils.testState1))).toEqual(expectedState);
  });

  test('should handle a todo being added to an existing list', () => {
    v4.mockImplementation(() => 1);
    const previousState = [utils.testState1];
    const expectedState = [...previousState, utils.testState2];

    expect(todosReducer(previousState, addTodo(utils.testState2))).toEqual(expectedState);
  });

  test('setting incremental id automatically', () => {
    const previousState = [];
    let id = 0
    v4.mockImplementation(() => id++);

    const idTestState1 = utils.testState1;
    idTestState1.id = 6;
    const idTestState2 = utils.testState2;
    idTestState2.id = 2;

    let reducer = todosReducer(previousState, addTodo(idTestState1));
    expect(reducer[0].id).toEqual(0);
    reducer = todosReducer(reducer, addTodo(idTestState2));
    expect(reducer[1].id).toEqual(1);
  });

  test('setting completed to false automatically', () => {
    let previousState = [];

    const completedTestState1 = utils.testState1;
    delete completedTestState1.completed;
    const completedTestState2 = utils.testState2;
    completedTestState2.completed = undefined;

    previousState = todosReducer(previousState, addTodo(completedTestState1));
    expect(previousState[0].completed).toEqual(false);
    previousState = todosReducer(previousState, addTodo(completedTestState2));
    expect(previousState[1].completed).toEqual(false);
  });
});
