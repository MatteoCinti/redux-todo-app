import { useState } from 'react';

const TextInput = ({ type, name, label, value }) => {
  const [todoValue, setTodoValue] = value;
  const [inputValue, setInputValue] = useState(todoValue)

  const handleChange = (e, setTodoValue, name) => {
    e.preventDefault();
    setInputValue(e.target.value)
    setTodoValue(oldState => ({
      ...oldState,
      [name]: inputValue,
    }));
  };
  
  return (
    <>
      <label id={name} htmlFor={name} className="form__label hidden"> {label} </label>
      <input
        aria-labelledby={name}
        type={type}
        name={name}
        className="form__input"
        placeholder={label}
        value={inputValue}
        onChange={e => handleChange(e, setTodoValue, name)}
        required
      />
    </>
  );
};

export default TextInput;