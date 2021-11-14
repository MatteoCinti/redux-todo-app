import filterReducer from './filter.reducer';
import { changeFilter } from '../../actions/categories.actions';

describe('Filter Reducer', () => {
  test('should change the filter on call', () => {
    expect(filterReducer('all', changeFilter('kiwis'))).toEqual('kiwis');
  });
});
