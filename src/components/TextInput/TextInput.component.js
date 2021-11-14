const TextInput = ({ type, name, label, todoState, className }) => {
  const [todoValue, setTodoValue] = todoState;

  const handleChange = e => {
    e.preventDefault();
    setTodoValue(oldState => ({
      ...oldState,
      [name]: e.target.value,
    }));
  };
  
  return (
    <>
      <label id={name} htmlFor={name} className="form__label hidden">{label}</label>
      <input
        aria-labelledby={name}
        type={type}
        name={name}
        className={`${className}__input`}
        placeholder={label}
        value={todoValue[name]}
        onChange={handleChange}
        required
      />
    </>
  );
};

export default TextInput;