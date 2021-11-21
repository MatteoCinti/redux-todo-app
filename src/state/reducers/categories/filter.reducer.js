import { CHANGE_CATEGORY_FILTER } from '../../types';

const filterReducer = (state = 'all', action) => {
  switch (action.type) {
    case CHANGE_CATEGORY_FILTER:
      return action.newFilter;
    default:
      return state;
  }
};

export default filterReducer;
