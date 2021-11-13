import { useState } from 'react';
import TextInput from '../Input/Input.component';

const Form = ({ setTodos }) => {
  const [todoValue, setTodoValue] = useState({
    title: '',
    body: '',
    category: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    setTodos(prevState => ([
      ...prevState,
      todoValue,
    ]));

    setTodoValue(oldTodo => ({
      ...oldTodo,
      title: '',
      body: '',
    }));
  };

  return (
    <form id="form" className='form' data-testid="form" onSubmit={handleSubmit}>
      <TextInput type='text' name="title" label="Title" value={[todoValue.title, setTodoValue]}/>
      <TextInput type='text-area' name="body" label="Body" value={[todoValue.body, setTodoValue]}/>
      <TextInput type='text' name="category" label="Category" value={[todoValue.category, setTodoValue]}/>
      <input type="submit" className="form__submit" name='add-todo' value='Add Todo'/>
    </form>
  );
};

export default Form;