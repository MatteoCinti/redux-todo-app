import { CHANGE_FILTER } from "../types";
export const changeFilter = newFilter => ({ 
  type: CHANGE_FILTER,
  newFilter
});