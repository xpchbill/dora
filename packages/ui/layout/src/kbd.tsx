import { chakra, PropsOf } from '@ALK-UI/system';
import { __DEV__ } from '@ALK-UI/utils';

export type KbdProps = PropsOf<typeof Kbd>;

/**
 * Semantic component to render a keyboard shortcut
 * within an application.
 *
 * @example
 *
 * ```jsx
 * <Kbd>⌘ + T</Kbd>
 * ```
 *
 * @see Docs https://chakra-ui.com/components/kbd
 */
export const Kbd = chakra('kbd', {
  themeKey: 'Kbd',
  baseStyle: {
    fontFamily: 'mono',
  },
});

if (__DEV__) {
  Kbd.displayName = 'Kbd';
}
