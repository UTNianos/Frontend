import React from 'react';
import NotFound from './NotFound';
import renderer from 'react-test-renderer';

test('<NotFound /> renders correctly', () => {
  const component = renderer.create(<NotFound />,);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
