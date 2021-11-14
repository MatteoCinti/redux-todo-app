const SelectInput = ({ name, label, todoState, className }) => {
  const [todoValue, setTodoValue] = todoState;

  const handleChange = e => {
    setTodoValue(oldState => ({
      ...oldState,
      [name]: e.target.value,
    }));
  };
  
  return (
    <>
      <label id={name} htmlFor={name} className="form__label hidden">{label}</label>
      <select
        aria-labelledby={name}
        name={name}
        className={`${className}__input ${className}__input--select`}
        value={todoValue[name]}
        onChange={handleChange}
      >
        <option className={`${className}__input--option`} value="no category">None</option>
        <option className={`${className}__input--option`} value="grapefruit">Grapefruit</option>
        <option className={`${className}__input--option`} value="lime">Lime</option>
        <option className={`${className}__input--option`} value="coconut">Coconut</option>
        <option className={`${className}__input--option`} value="mango">Mango</option>
      </select>
    </>
  );
};

export default SelectInput;