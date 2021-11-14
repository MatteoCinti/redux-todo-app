import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import TextInput from './TextInput.component';

describe('The TextInput component', () => {
  const todoValue = '';
  const setTodoValue = jest.fn();
  const name = 'test-form';
  const label = 'test';

  beforeEach(() => {
    setTodoValue.mockClear();
    render(<TextInput type="text" name={name} label={label} todoState={[todoValue, setTodoValue]} />);
  });

  test('Should have a label', () => {
    const textbox = screen.getByRole('textbox', { name: label });
    expect(textbox).toBeInTheDocument();
  });

  test('Should have a placeholder', () => {
    const textbox = screen.getByRole('textbox', { name: label });
    expect(textbox.placeholder).toBe(label);
  });

  test('Should set the correct value', () => {
    const textbox = screen.getByRole('textbox', { name: label });
    expect(textbox).toHaveValue('');

    user.type(screen.getByRole('textbox', { name: label }), 'Forza{space}Lazio');
    expect(textbox).toHaveValue('Forza Lazio');
  });
});
