import 'react-native';
import React from 'react';
import MainApp from '../src/MainApp.js';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <MainApp />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
