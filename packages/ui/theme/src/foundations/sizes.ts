export const baseSizes = {
  px: '1px',
  '0': '0',
  '1': '4px',
  '2': '8px',
  '3': '12px',
  '4': '16px',
  '5': '20px',
  '6': '24px',
  '8': '32px',
  '10': '40px',
  '12': '48px',
  '16': '64px',
  '20': '80px',
  '24': '96px',
  '32': '128px',
  '40': '160px',
  '48': '192px',
  '56': '224px',
  '64': '256px',
};

export type BaseSizes = typeof baseSizes;

const largeSizes = {
  full: '100%',
  '3xs': '14rem',
  '2xs': '16rem',
  xs: '20rem',
  sm: '24rem',
  md: '28rem',
  lg: '32rem',
  xl: '36rem',
  '2xl': '42rem',
  '3xl': '48rem',
  '4xl': '56rem',
  '5xl': '64rem',
  '6xl': '72rem',
};

const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

const sizes = {
  ...baseSizes,
  ...largeSizes,
  container,
};

export type Sizes = typeof baseSizes &
  typeof largeSizes & { container: typeof container };

export default sizes;
