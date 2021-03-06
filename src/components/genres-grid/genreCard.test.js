import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { mount } from 'utilities';

import GenreCard from './genreCard';

describe('Genre Card Component', () => {
  let component;
  const mockfn = jest.fn();

  beforeEach(() => {
    component = mount(
      <BrowserRouter>
        <GenreCard onClick={mockfn} />
      </BrowserRouter>
    );
  });

  it('should render a Card', () => {
    const wrapper = component.find('Card');
    expect(wrapper.length).toBe(1);
  });

  it('should call the mock method with Card click', () => {
    const wrapper = component.find('Card');
    wrapper.simulate('click');
    expect(mockfn).toHaveBeenCalled();
  });
});
