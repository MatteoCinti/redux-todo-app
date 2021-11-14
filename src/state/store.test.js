import store from './store';

describe('Redux store', () => {
  it('gets todos', () => {
    const { todos } = store.getState();
    expect(todos).toEqual([]);
  });
});
