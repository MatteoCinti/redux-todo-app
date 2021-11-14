import React from 'react';

import { useSelector } from 'react-redux';

const TodosMeta = () => {
  const leftTodo = useSelector(state => state.todos.filter(todo => !todo.completed));
  const completed = useSelector(state => state.todos.filter(todo => todo.completed));

  return (
    <section className="todos-meta">
      <p>
        <span>
          completed(
          {completed.length}
          ) -
          {' '}
        </span>
        <span>
          left(
          {leftTodo.length}
          )
        </span>
      </p>
    </section>
  );
};

export default TodosMeta;
