import * as React from 'react';
import { render, userEvent, fireEvent } from '@ALK-UI/test-utils';
import { chakra } from '@ALK-UI/system';
import { ClickableProps } from '../Clickable.stories';
import { useClickable } from '../Clickable';

const Clickable = (props: ClickableProps) => (
  <chakra.button display="inline-flex" {...useClickable(props)} />
);

test('should render correctly', () => {
  const tools = render(<Clickable>clickable</Clickable>);
  expect(tools.getByText('clickable')).toMatchInlineSnapshot(`
    <button
      class="css-vxcmzt"
      type="button"
    >
      clickable
    </button>
  `);
});

test('should render when disabled and focusable', () => {
  const tools = render(
    <Clickable isDisabled isFocusable>
      clickable
    </Clickable>,
  );
  expect(tools.getByText('clickable')).toMatchInlineSnapshot(`
    <button
      aria-disabled="true"
      class="css-vxcmzt"
      type="button"
    >
      clickable
    </button>
  `);
});

test('should click correctly', () => {
  const fn = jest.fn();
  const tools = render(<Clickable onClick={fn}>clickable</Clickable>);
  const clickable = tools.getByText('clickable');

  expect(fn).toHaveBeenCalledTimes(0);
  userEvent.click(clickable);
  expect(fn).toHaveBeenCalledTimes(1);
});

test('should not click if disabled', () => {
  const fn = jest.fn();

  const tools = render(
    <Clickable onClick={fn} isDisabled>
      clickable
    </Clickable>,
  );

  const clickable = tools.getByText('clickable');
  userEvent.click(clickable);
  expect(fn).toHaveBeenCalledTimes(0);
});

test('should not focus if disabled', () => {
  const tools = render(<Clickable isDisabled>clickable</Clickable>);
  const clickable = tools.getByText('clickable');

  expect(clickable).not.toHaveFocus();
  fireEvent.focus(clickable);
  expect(clickable).not.toHaveFocus();
});

test('non-native: should click on press `space` or `enter`', () => {
  const fn = jest.fn();
  const tools = render(
    <Clickable as="div" onClick={fn}>
      clickable
    </Clickable>,
  );

  const clickable = tools.getByText('clickable');

  fireEvent.keyDown(clickable, { key: 'Enter' });
  expect(fn).toHaveBeenCalledTimes(1);

  fireEvent.keyDown(clickable, { key: ' ' });
  fireEvent.keyUp(clickable, { key: ' ' });

  expect(fn).toHaveBeenCalledTimes(2);
});
