import { render, screen, fireEvent, waitFor, cleanup } from '@testing-library/react';
import App from '../../App.js'
import Form from './Form.component.js';

describe('The Form component', () => {
//   const setup = () => {
//     const utils = render(<Form />)
//     return {
//       ...utils,
//     }
//   }

  test('should render on the App', () => {
    const {container} =  render(<App />)
    container.querySelector('#sandbox > form')
  });
  // test('should render on the page', () => {
  //   setup();
  //   const inputs = screen.getAllByRole('textbox')
  //   expect(inputs.length).toBe(2);
  // });
})