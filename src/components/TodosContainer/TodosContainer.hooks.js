import { useSelector } from 'react-redux';

const CategoryFilter = () => useSelector(state => state.categories.filter);

const filterTodosByCategory = (state, categoryFilter) => {
  const filter = categoryFilter()
  return (
    filter !== 'all'
    ? state.filter(todo => todo.category === filter)
    : state
  )
}

const filterTodosIfCompleted = (filteredState, hideCompleted) => {
  return hideCompleted
    ? filteredState.filter(todo => !todo.completed)
    : filteredState
}

const FilterTodos = (hideCompleted)=> (
  useSelector(
    state => {
      const filteredByCategory = filterTodosByCategory(state.todos, CategoryFilter)
      const filteredByCompleted = filterTodosIfCompleted(filteredByCategory, hideCompleted)

      return filteredByCompleted
    }
  )
);

export default {
  FilterTodos
}