import React from 'react';
import { mount, shallow } from 'utilities';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Login from './index';

const mockStore = configureMockStore([thunk]);

describe('Header Component', () => {
  let component;
  const mockfn = jest.fn();

  beforeEach(() => {
    component = mount(<Login onClick={mockfn} />);
  });

  it('should render a button', () => {
    const wrapper = component.find('Button');
    expect(wrapper.length).toBe(1);
  });

  it('should call the mock method with button click', () => {
    const wrapper = component.find('Button');
    wrapper.simulate('click');
    expect(mockfn).toHaveBeenCalled();
  });
});
