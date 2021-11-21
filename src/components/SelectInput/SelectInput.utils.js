import { changeCategoryFilter, addCategory } from '../../state/actions/categories.actions'

const dispatchChangeCategoryFilter = (newFilter, dispatch) => dispatch(changeCategoryFilter(newFilter));

const utils = {
  changeCategoryFilter: dispatchChangeCategoryFilter,
};
export default utils;