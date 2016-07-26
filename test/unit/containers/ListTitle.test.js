import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { Map } from 'immutable';
import { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import ListTitle from '../../../src/containers/ListTitle/ListTitle';

describe('ListTitle', () => {
  const mockStore = configureMockStore();
  it('should render with a null title', () => {
    const store = mockStore(Map({ name: null }));
    const wrapper = mount(<Provider store={store}><ListTitle /></Provider>);
    expect(wrapper.find('h2').text()).to.equal('My List');
  });

  it('should render with a blank title', () => {
    const store = mockStore(Map({ name: ' ' }));
    const wrapper = mount(<Provider store={store}><ListTitle /></Provider>);
    expect(wrapper.find('h2').text()).to.equal('My List');
  });

  it('should render with a title', () => {
    const store = mockStore(Map({ name: 'Sorcha1 list' }));
    const wrapper = mount(<Provider store={store}><ListTitle /></Provider>);
    expect(wrapper.find('h2').text()).to.equal('Sorcha1 list');
  });
});
