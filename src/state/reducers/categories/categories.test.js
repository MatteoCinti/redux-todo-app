import categoriesReducer from './categories.reducer';
import { addCategory } from '../../actions/categories.actions';

describe('Categories Reducer', () => {
  test('should add categories to state', () => {
    expect(categoriesReducer([], addCategory('kiwis'))).toEqual(['Kiwis']);
    expect(categoriesReducer(['Kiwis'], addCategory('bananas'))).toEqual(['Kiwis', 'Bananas']);
  });
  test('should not add twice the same categorY to state', () => {
    expect(categoriesReducer(['Kiwis'], addCategory('kiwis'))).toEqual(['Kiwis']);
  });
});
