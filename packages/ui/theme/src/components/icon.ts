import { ComponentTheme } from './utils';

const Icon: ComponentTheme = {
  defaultProps: {
    size: 'md',
  },
  sizes: {
    xl: { boxSize: '48px' },
    lg: { boxSize: '40px' },
    md: { boxSize: '32px' },
    sm: { boxSize: '24px' },
    xs: { boxSize: '16px' },
  },
};

export const IconTokens = {
  sizes: {
    xl: 'xl',
    lg: 'lg',
    md: 'md',
    sm: 'sm',
    xs: 'xs',
  },
};

export default Icon;
