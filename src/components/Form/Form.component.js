import { Children, cloneElement } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import utils from './Form.utils'

const emptyTextInput = { 
  title: '',
  body: '',
  category: 'none'
}

const Form = ({ label, classValue, todoElementState, setState, children, toggleEditMode }) => {
  const startingState = todoElementState || emptyTextInput;
  const [todoValue, setTodoValue] = useState(startingState);
  let dispatch = useDispatch();

  const handleSubmit = (e => {
    e.preventDefault();
    utils[setState](todoValue, dispatch)
    toggleEditMode && toggleEditMode(e)
    setTodoValue(emptyTextInput)
  });

  const childrenWithExtraProp = Children.map( children, (child) => (
    cloneElement(child, { todoState: [todoValue, setTodoValue] })
  ))
  
  return (
    <form id={label} className={`form ${classValue}`} aria-label={label} onSubmit={handleSubmit}>
      {childrenWithExtraProp}
      <input 
        type="submit" 
        className={`form__submit ${classValue}__submit`} 
        name={classValue} 
        value={classValue.replace('-', ' ')}
      />
    </form>
  );
};

export default Form;


