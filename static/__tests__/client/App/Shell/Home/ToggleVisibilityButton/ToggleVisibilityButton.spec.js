import React from 'react';
import ToggleVisibilityButton from '../../../../../../client/App/Shell/Home/ToggleVisibilityButton/ToggleVisibilityButton';
import {shallow} from 'enzyme';

describe('ToggleVisibilityButton component', () => {
  it('renders without crashing', () => {
    shallow(<ToggleVisibilityButton />);
  });

  it('should display tooltip and icon according to visibility', () => {
    const wrapper = shallow(<ToggleVisibilityButton visibility />);
    const iconButtonWrapper = wrapper.find('IconButton');

    expect(iconButtonWrapper.props().tooltip).toBe('Show Active');
    expect(iconButtonWrapper.find('ActionVisibilityOff')).toBePresent();
  });
});
