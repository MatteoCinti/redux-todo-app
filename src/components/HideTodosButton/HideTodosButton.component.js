const HideTodosButton = ({ hiddenState }) => { 
  const [ hideCompleted, setHideCompleted ] = hiddenState
  const HideCompletedTodos = e => {
    e.preventDefault();
    setHideCompleted(prevState => !prevState)
  }

  return (
    <button className='hide-completed' onClick={HideCompletedTodos}>
      { hideCompleted ? 'Show ' : 'Hide ' }
      Completed Todos
    </button>)
}

export default HideTodosButton