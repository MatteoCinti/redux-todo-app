import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import user from '@testing-library/user-event';

import SelectInput from './SelectInput.component';
import utils from './SelectInput.utils';

describe('The Input component', () => {
  const initialState = { todos: [] };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    render(<Provider store={store}><Form setState="addTodo" classValue="Set-todo" /></Provider>);
  });

  test('Should set state on change if is Filter', () => {
    const addTodo = jest.spyOn(utils, 'changeCategoryFilter');
    user.type(screen.getByRole('textbox', { name: label }), 'Forza{space}Lazio');

    expect(addTodo).toHaveBeenCalledTimes(1);
  });
});