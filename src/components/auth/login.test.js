import React from 'react';

import { mount } from 'utilities';

import Login from './index';

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
