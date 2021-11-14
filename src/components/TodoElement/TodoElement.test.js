import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import user from '@testing-library/user-event'

import TodoElement from './TodoElement.component';
import utils from './TodoElement.utils';

describe('The Todolement component', () => {
  const todo = {
    id: 0,
    title: 'Salutare Vale',
    category: 'GP',
    body: 'Vedere l\'ultima del Dottore',
    completed: false
  };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore([todo]);
    render(<Provider store={store}><TodoElement todo={todo}/></Provider>);
  });


  test('Should properly display Title and Body', () => {
    const title = screen.getByText(todo.title)
    const body = screen.getByText(todo.body)

    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });

  test('Should set state on click', () => {
    const toggleCompleted = jest.spyOn(utils, 'toggleCompleted');

    const submit = screen.getByRole('heading')
    user.click(submit)

    expect(toggleCompleted).toHaveBeenCalledTimes(1);
  });

  test('Should handle multiple clicks', () => {
    const toggleCompleted = jest.spyOn(utils, 'toggleCompleted');

    const submit = screen.getByRole('heading')
    user.click(submit)
    user.click(submit)
    user.click(submit)

    expect(toggleCompleted).toHaveBeenCalledTimes(3);
  });

  test('On clicking remove, component sould be removed', () => {
    const todo = {
      id: 0,
      title: 'Salutare Vale',
      body: 'Vedere l\'ultima del Dottore',
      completed: true
    };
    store = mockStore([todo]);
    const removeTodo = jest.spyOn(utils, 'removeTodo');
    render(<Provider store={store}><TodoElement todo={todo}/></Provider>);
    const removeButton = screen.getByRole('button', { name: /x/i })
    user.click(removeButton);
    expect(removeTodo).toHaveBeenCalledTimes(1);
  });

  test('On clicking editable, should set editable', () => {
    const edit = screen.getByRole('button', { name: /edit/i });

    let textInputs = screen.queryByRole('textbox');
    expect(textInputs).toBeNull();

    user.click(edit);
    textInputs = screen.getAllByRole('textbox');
    expect(textInputs.length).toBeGreaterThanOrEqual(1);
  });
})
