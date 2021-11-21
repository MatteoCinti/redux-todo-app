import { ADD_CATEGORY } from '../../types';

const capitalizeFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      const newCategory = capitalizeFirstLetter(action.newCategory);
      if(state.includes(newCategory)){
        return state;
      }
      return [...state, newCategory]
    default:
      return state;
  }
};

export default categoriesReducer;
