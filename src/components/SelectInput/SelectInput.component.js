import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import utils from './SelectInput.utils'

const DefaultInputStateHook = (name) => {
 const [todoValue, setTodoValue] = useState({[name]: 'all'})
 return [todoValue, setTodoValue];
}

const ShouldUseEffect = (todoValue, name, dispatch ) => {
  useEffect(() => {
    utils.changeCategoryFilter(todoValue[name], dispatch)
  }, [todoValue, dispatch, name])
}

const SelectInput = ({ name, label, todoState, className, isFilter }) => { 
  let [todoValue, setTodoValue] = todoState ? todoState : DefaultInputStateHook(name)
  const dispatch = useDispatch();

  isFilter && ShouldUseEffect(todoValue, name, dispatch)

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
        onChange={handleChange}>
        <option className={`${className}__input--option`} value="all">None</option>
        <option className={`${className}__input--option`} value="grapefruit">Grapefruit</option>
        <option className={`${className}__input--option`} value="lime">Lime</option>
        <option className={`${className}__input--option`} value="coconut">Coconut</option>
        <option className={`${className}__input--option`} value="mango">Mango</option>
      </select>
    </>
  );
};

export default SelectInput;
