import { useState } from 'react'
import { useSelector } from 'react-redux'

import TodoElement from '../TodoElement/TodoElement.component';
import HideTodosButton from '../HideTodosButton/HideTodosButton.component';
import TodosInfo from '../TodosInfo/TodosInfo.component';

const FilterCompletedTodos = (hideCompleted) => {
  return useSelector((state) => {
    return hideCompleted 
      ? state.todos.filter((todo) => !todo.completed)
      : state.todos
  })
}

const TodosContainer = () => {
  const [hideCompleted, setHideCompleted] = useState(false)
  let todos = FilterCompletedTodos(hideCompleted);


  return (
    <section className="todos-container" data-testid="todos-container">
      <TodosInfo />
      <HideTodosButton hiddenState={[hideCompleted, setHideCompleted]} />
      { todos && todos.map(todo => (
        <TodoElement key={todo.id} todo={todo}/>
      )) }
    </section>
  );
};

export default TodosContainer;