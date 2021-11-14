import { CHANGE_FILTER } from '../../types'

const filterReducer = (state = 'all', action) => {
  switch(action.type) {
    case CHANGE_FILTER:
      return action.newFilter
    default:
      return state;
  }
}

export default filterReducer;