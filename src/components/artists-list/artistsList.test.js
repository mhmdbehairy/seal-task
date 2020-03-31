import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { mount } from 'utilities';
import ArtistList from './index';

const mockStore = configureMockStore([thunk]);

describe('Header Component', () => {
  let store;
  let component;
  const mockfn = jest.fn();

  beforeEach(() => {
    store = mockStore({
      artists: { artistsList: [] }
    });

    global.DZ = {
      api: jest.fn()
    };

    component = mount(
      <BrowserRouter>
        <Provider store={store}>
          <ArtistList />
        </Provider>
      </BrowserRouter>
    );
  });

  it('should render without errors', () => {
    const wrapper = component.find('ArtistList');
    expect(wrapper.length).toBe(1);
  });
});
