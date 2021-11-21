import filterReducer from './filter.reducer';
import { changeCategoryFilter } from '../../actions/categories.actions';

describe('Filter Reducer', () => {
  test('should change the filter on call', () => {
    expect(filterReducer('all', changeCategoryFilter('kiwis'))).toEqual('kiwis');
  });
});
