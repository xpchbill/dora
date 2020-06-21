import * as React from 'react';
import { render } from '@ALK-UI/test-utils';
import { Spinner } from '..';

test('Spinner renders correctly', () => {
  const { asFragment } = render(<Spinner />);
  expect(asFragment()).toMatchSnapshot();
});
