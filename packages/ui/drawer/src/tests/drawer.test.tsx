import * as React from 'react';
import { render } from '@ALK-UI/test-utils';
import { PortalManager } from '@ALK-UI/portal';
import { Drawer } from '..';

test('Drawer renders correctly', () => {
  const { asFragment } = render(
    <PortalManager>
      <Drawer isOpen onClose={jest.fn()} />
    </PortalManager>,
  );
  expect(asFragment()).toMatchSnapshot();
});
