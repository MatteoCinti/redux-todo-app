import { useState } from 'react';
import { useDispatch } from 'react-redux';
import utils from './TodoElement.utils.js'
import TodoForm from '../TodoForm/TodoForm.component'


const TodoElement = ({ todo }) => {
  let { body, title, category, completed, id } = todo;
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const toggleEditMode = e => {
    e.stopPropagation();
    setEditMode(editMode => !editMode)
  }

  const handleClick = (e) => {
    if(editMode) { return }
    utils.toggleCompleted(e, id, dispatch)
  }


  const DeleteButton = <button className="to-do__remove" onClick={ e => utils.removeTodo(e, id, dispatch)}>x</button>
  
  return (
    <section
      onClick={handleClick}
      className={`to-do ${completed ? 'completed' : ''}`}
    > 
      {editMode 
        ? <> 
            <TodoForm 
              label={`todo-${id}-form`} 
              classValue='modify-form' 
              setState={'updateTodo'} 
              todoElementState={todo} 
              toggleEditMode={toggleEditMode}
            />
            { DeleteButton }
          </>
        : <> 
            <p className="to-do__category">{category}</p>
            <h3 className="to-do__title">{title}</h3>
            <p className="to-do__description">{body}</p>
            { completed 
              ? <span className='to-do__completed'>completed</span>
              : <button className="to-do__edit" onClick={toggleEditMode}>Edit</button>
              }
            { completed && DeleteButton }
          </>
      }
    </section> 
  )
};

export default TodoElement;