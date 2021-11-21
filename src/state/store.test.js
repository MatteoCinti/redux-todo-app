import store from './store';
import { loadLocaStorageState } from './localStorage';


describe('Redux store', () => {
  test('renders default store', () => {
    const { todos } = store.getState();
    expect(todos).toEqual([]);
  });
});
