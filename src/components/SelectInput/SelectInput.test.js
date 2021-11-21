import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import user from '@testing-library/user-event';

import SelectInput from './SelectInput.component';
import utils from './SelectInput.utils';

describe('The Input component', () => {
  const initialState = {todos: [], categories: { filter:'all', categories: ['Mango'] }};
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('Should set state on change if is Filter', () => {
    const changeFilter = jest.spyOn(utils, 'changeCategoryFilter');
    render(<Provider store={store}><SelectInput name="category-filter" label="Category-filter" className='category-filter' isFilter={true} /></Provider>);
    user.click(screen.getByRole('option', { name: 'Mango' }));

    expect(changeFilter).toHaveBeenCalledTimes(1);
  });

});