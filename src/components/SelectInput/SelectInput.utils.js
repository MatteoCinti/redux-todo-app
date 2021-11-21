import { changeCategoryFilter } from '../../state/actions/categories.actions'

const dispatchchangeCategoryFilter = (newFilter, dispatch) => dispatch(changeCategoryFilter(newFilter));

const utils = {
  changeCategoryFilter: dispatchchangeCategoryFilter,
};
export default utils;