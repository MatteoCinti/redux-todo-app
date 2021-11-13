import { ADD_TODO } from "../types";
export const addTodo = (todoObject) => ({ 
  type: ADD_TODO, 
  todoObject
});