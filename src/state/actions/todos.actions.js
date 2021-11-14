import { ADD_TODO, CLEAR_TODOS, TOGGLE_COMPLETED, REMOVE_TODO, UPDATE_TODO } from "../types";
export const addTodo = todoObject => ({ 
  type: ADD_TODO, 
  todoObject
});

export const clearTodos = () => ({ 
  type: CLEAR_TODOS 
});

export const toggleCompleted = todoId => ({ 
  type: TOGGLE_COMPLETED,
  todoId
})

export const removeTodo = todoId => ({ 
  type: REMOVE_TODO,
  todoId
})
export const updateTodo = ( updatedTodo ) => ({ 
  type: UPDATE_TODO,
  updatedTodo
})