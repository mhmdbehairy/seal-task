import React from 'react';
import { Provider } from 'react-redux';
import { mount, shallow } from 'utilities';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import GenreCard from './genreCard';
import { BrowserRouter } from 'react-router-dom';

const mockStore = configureMockStore([thunk]);

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
