import { render, screen } from '@testing-library/react';
import App from './App';

describe('The App component', () => {
  test('should render the form', () => {
    const {container} =  render(<App />)
    container.querySelector('#sandbox > form')
  });
})