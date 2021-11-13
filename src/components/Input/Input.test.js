import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import Input from './Input.component.js';

describe('The Input component', () => {
  const mockInput = 'Forza'
  const setInputValue = jest.fn();
  const name = 'test-form'
  const label = 'test'
  let inputValue = {
    test: ''
  }

  beforeEach(() => {
    setInputValue.mockClear();
    render(<Input type='text' name={name} label={label} value={[inputValue.test, setInputValue]}/>)
  })

  test('Should have a label', () => {
    const textbox = screen.getByRole('textbox', { name: label })
    expect(textbox).toBeInTheDocument();
  });

  test('Should have a placeholder', () => {
    const textbox = screen.getByRole('textbox', { name: label })
    expect(textbox.placeholder).toBe(label);
  });

  test('Should set the correct value', () => {
    const textbox = screen.getByRole('textbox', { name: label })
    expect(textbox).toHaveValue('');

    user.type(screen.getByRole('textbox', { name: label }), mockInput);
    expect(textbox).toHaveValue(mockInput);
  });
})