import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'utilities';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Header from './index';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore([thunk]);

describe('Header Component', () => {
  let store;
  let component;
  const mockfn = jest.fn();

  beforeEach(() => {
    store = mockStore({
      authentication: { user: null }
    });

    component = mount(
      <BrowserRouter>
        <Provider store={store}>
          <Header onClick={mockfn} />
        </Provider>
      </BrowserRouter>
    );
  });

  it('should render a button', () => {
    const wrapper = component.find('Button');
    expect(wrapper.length).toBe(1);
  });

  it('should render a logo', () => {
    const logo = component.find('Logo');
    expect(logo.length).toBe(1);
  });

  it('should call the mock method with button click', () => {
    const wrapper = component.find('Button');
    wrapper.simulate('click');
    expect(mockfn).toHaveBeenCalled();
  });
});
