import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from './App';

describe('The App component', () => {
  const initialState = { todos: [], categories: { filter:'all' } };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
    render(<Provider store={store}><App /></Provider>);
  });

  test('should render the form', () => {
    const form = screen.getByRole('form', /todo-form/i);
    expect(form).toBeInTheDocument();
  });
});
