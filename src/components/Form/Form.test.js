import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import user from '@testing-library/user-event'

import Form from './Form.component';
import utils from './Form.utils';

describe('The Form component', () => {
  const initialState = { todos: [] };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState)
    render(<Provider store={store}><Form setState='addTodo' classValue='Set-todo' /></Provider>)
  })

  test('Should set state on submit', () => {
    const addTodo = jest.spyOn(utils, 'addTodo');

    const submit = screen.getByRole('button', /add-to-do/i)
    user.click(submit)

    expect(addTodo).toHaveBeenCalledTimes(1);
  });
})