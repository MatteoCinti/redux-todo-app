import React, { useState } from 'react';

import TodoElement from '../TodoElement/TodoElement.component';
import HideTodosButton from '../HideTodosButton/HideTodosButton.component';
import TodosInfo from '../TodosInfo/TodosInfo.component';

import hooks from './TodosContainer.hooks'

const TodosContainer = () => {
  const [hideCompleted, setHideCompleted] = useState(false);
  const todos = hooks.FilterTodos(hideCompleted);

  return (
    <section className="todos-container" data-testid="todos-container">
      <TodosInfo />
      <HideTodosButton hiddenState={[hideCompleted, setHideCompleted]} />
      { todos && todos.map(todo => (
        <TodoElement key={todo.id} todo={todo} />
      )) }
    </section>
  );
};

export default TodosContainer;
