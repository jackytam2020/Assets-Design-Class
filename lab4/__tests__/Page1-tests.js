/**
 * @format
 */

import 'react-native';
import React from 'react';
import Page1 from '../comps/Page1';


// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<Page1 />);
});
