import { useState } from 'react';
import Form from './components/Form/Form.component';

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <header className="header">
        <h1 className="header--title">&lt;\SALT&gt; TO DO APP</h1>
      </header>

      <main className="to-do-app">
        <Form setTodos={setTodos} />
      </main>
    </>
  );
}

export default App;
