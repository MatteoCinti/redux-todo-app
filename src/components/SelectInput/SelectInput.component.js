import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import utils from './SelectInput.utils'

const DefaultInputStateHook = (name) => {
 const [todoValue, setTodoValue] = useState({[name]: 'all'})
 return [todoValue, setTodoValue];
}

const FilterUseEffect = (todoValue, name, dispatch ) => {
  useEffect(() => {
    utils.changeCategoryFilter(todoValue[name], dispatch)
  }, [todoValue, dispatch, name])
}

const SelectInput = ({ name, label, todoState, className, isFilter }) => { 
  let [todoValue, setTodoValue] = todoState ? todoState : DefaultInputStateHook(name);
  const dispatch = useDispatch();
  const categories =  useSelector(state => state.categories.categories) || [];

  isFilter && FilterUseEffect(todoValue, name, dispatch);

  const renderOptions = categories.map(category => (
    <option key={category} className={`${className}__input--option`} value={category}>{category}</option>
  ))

  const handleChange = e => {
    setTodoValue(oldState => ({
      ...oldState,
      [name]: e.target.value,
    }));
  };

  const handleFocus = () => {
    setTodoValue(oldState => ({
      ...oldState,
      [name]: '',
    }));
  };
  
  return (
    <>
      { isFilter 
        ? <select
            aria-labelledby={name}
            name={name}
            className={`${className}__input ${className}__input--select`}
            value={todoValue[name]}
            onChange={handleChange}
          >
            <option className={`${className}__input--option`} value="all">None</option>
            {renderOptions}
          </select>
        : <>  
            <label id={name} htmlFor={name} className="form__label hidden">{label}</label>
            <input
              id={`${name}-select`}
              type="text" 
              list="categories" 
              aria-labelledby={name}
              name={name}
              className={`${className}__input ${className}__input--select`}
              value={todoValue[name]}
              onChange={handleChange}
              onFocus={handleFocus}
            />
            <datalist id="categories">
              <option className={`${className}__input--option`} value="all">None</option>
              {renderOptions}
            </datalist>
          </>
      }
    </>
  );
};

export default SelectInput;
