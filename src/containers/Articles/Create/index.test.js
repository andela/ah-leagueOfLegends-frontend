import React from 'react';
import { shallow } from 'enzyme';
import history from '../../../history';
import editorState from './editorState';
import CreateComponent from './index';
import store from '../../../store/store';

describe('Editor state', () => {
  it('should be an object with property type', () => {
    expect(editorState.blocks[0].type).toBe('header-one');
  });
  it('should render Editor component', () => {
    const wrapper = shallow(
      <CreateComponent store={store} history={history} />,
    );
    expect(wrapper.find('.editor')).toBeDefined();
  });
});
