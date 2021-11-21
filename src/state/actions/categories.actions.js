import { CHANGE_CATEGORY_FILTER } from '../types';

export const changeCategoryFilter = newFilter => ({
  type: CHANGE_CATEGORY_FILTER,
  newFilter,
});
