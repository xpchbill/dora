import * as React from 'react';
import { render } from '@ALK-UI/test-utils';
import { AddIcon } from '@ALK-UI/icons';
import { Tag, TagLeftIcon, TagLabel, TagCloseButton } from '..';

test('Tag renders correctly', () => {
  const { asFragment } = render(
    <>
      <Tag>A</Tag>
      <Tag>
        <TagLabel>B</TagLabel>
        <TagCloseButton />
      </Tag>
      <Tag>
        <TagLeftIcon as={AddIcon} />
        <TagLabel>C</TagLabel>
        <TagCloseButton />
      </Tag>
    </>,
  );
  expect(asFragment()).toMatchSnapshot();
});
