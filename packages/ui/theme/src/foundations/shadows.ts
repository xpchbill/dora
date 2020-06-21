const shadows = {
  sm: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  outline: '0 0 0 3px rgba(77,184,255,0.5)',
  inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
  none: 'none',
  0: '0 0 0 0 transparent',
  1: '0 2px 8px 1px rgba(0,0,0,0.05)',
  2: '2px 4px 8px 1px rgba(0,0,0,0.05)',
  3: '0 4px 8px 0 rgba(0,0,0,0.1)',
  4: '0 6px 12px 0 rgba(0,0,0,0.1)',
  5: '0 8px 16px 0 rgba(0,0,0,0.1)',
  6: '0 10px 20px 0 rgba(0,0,0,0.1)',
  7: '0 12px 24px 0 rgba(0,0,0,0.1)',
};

export type Shadows = typeof shadows;

export default shadows;
