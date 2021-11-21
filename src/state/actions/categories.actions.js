import { CHANGE_CATEGORY_FILTER, ADD_CATEGORY } from '../types';

export const changeCategoryFilter = newFilter => ({
  type: CHANGE_CATEGORY_FILTER,
  newFilter,
});

export const addCategory = newCategory => ({
  type: ADD_CATEGORY,
  newCategory
})
