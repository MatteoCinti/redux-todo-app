import React from 'react';
import TodoForm from './components/TodoForm/TodoForm.component';
import TodosContainer from './components/TodosContainer/TodosContainer.component';
import CategoryFilterForm from './components/CategoryFilterForm/CategoryFilterForm.component';

function App() {
  return (
    <>
      <header className="header">
        <h1 className="header--title">&lt;\SALT&gt; TO DO APP</h1>
      </header>

      <main className="to-do-app">
        <CategoryFilterForm />
        <TodoForm label="todo-form" classValue="add-todo" setState="addTodo" />
        <TodosContainer />
      </main>
    </>
  );
}

export default App;
