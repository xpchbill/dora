import { chakra, PropsOf } from '@ALK-UI/system';
import { __DEV__ } from '@ALK-UI/utils';

export type HeadingProps = PropsOf<typeof Heading>;

export const Heading = chakra('h2', { themeKey: 'Heading' });

if (__DEV__) {
  Heading.displayName = 'Heading';
}
