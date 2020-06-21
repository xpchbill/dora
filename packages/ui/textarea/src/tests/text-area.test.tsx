import * as React from 'react';
import { render } from '@ALK-UI/test-utils';
import { Textarea } from '..';

test('Textarea renders correctly', () => {
  const { asFragment } = render(<Textarea defaultValue="hello" />);
  expect(asFragment()).toMatchSnapshot();
});
