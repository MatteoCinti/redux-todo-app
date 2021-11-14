import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('The App component', () => {
  const initialState = { todos: [] };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState)
    render(<Provider store={store}><App /></Provider>)
  })
  
  test('should render the form', () => {
    const form = screen.getByRole('form', /todo-form/i)
    expect(form).toBeInTheDocument();
  });
})