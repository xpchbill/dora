import { opacity } from '@ALK-UI/color';
import { Props, mode, ComponentTheme } from './utils';

const grayGhostStyle = (props: Props) => ({
  color: mode(`inherit`, `whiteAlpha.900`)(props),
  _hover: {
    bg: mode(`gray.100`, `whiteAlpha.200`)(props),
  },
  _active: {
    bg: mode(`gray.200`, `whiteAlpha.300`)(props),
  },
});

function getGhostStyle(props: Props) {
  const { colorScheme: c, theme: t } = props;
  if (c === 'gray') return grayGhostStyle(props);

  const darkHover = opacity(`${c}.200`, 0.12)(t);
  const darkActive = opacity(`${c}.200`, 0.24)(t);

  return {
    color: mode(`${c}.500`, `${c}.200`)(props),
    bg: 'transparent',
    _hover: {
      bg: mode(`${c}.50`, darkHover)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActive)(props),
    },
  };
}

function getOutlineStyle(props: Props) {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);

  return {
    border: '1px solid',
    borderColor: c === 'gray' ? borderColor : 'currentColor',
    ...getGhostStyle(props),
  };
}

const graySolidStyle = (props: Props) => ({
  bg: mode(`gray.100`, `whiteAlpha.200`)(props),
  _hover: {
    bg: mode(`gray.200`, `whiteAlpha.300`)(props),
  },
  _active: {
    bg: mode(`gray.300`, `whiteAlpha.400`)(props),
  },
});

function getSolidStyle(props: Props) {
  const { colorScheme: c } = props;

  if (c === 'gray') return graySolidStyle(props);

  return {
    bg: mode(`${c}.500`, `${c}.200`)(props),
    color: mode(`white`, `gray.800`)(props),
    _hover: { bg: mode(`${c}.600`, `${c}.300`)(props) },
    _active: { bg: mode(`${c}.700`, `${c}.400`)(props) },
  };
}

function getPrimaryStyle(props: Props) {
  const c = 'primary';

  return {
    bg: mode(`${c}.100`, `${c}.100`)(props),
    color: mode(`white`, `white`)(props),
    _hover: { bg: mode(`${c}.80`, `${c}.80`)(props) },
    _active: { bg: mode(`${c}.120`, `${c}.120`)(props) },
  };
}

function getSecondaryStyle(props: Props) {
  const c = 'secondary';

  return {
    bg: mode(`white`, `white`)(props),
    border: '1px solid',
    borderColor: mode(`gray.400`, `whiteAlpha.400`)(props),
    color: mode(`${c}.100`, `${c}.100`)(props),
    _hover: { bg: mode(`${c}.60`, `${c}.60`)(props) },
    _active: { bg: mode(`${c}.80`, `${c}.80`)(props) },
  };
}

function getSuperStyle(props: Props) {
  const c = 'brand';

  return {
    bg: mode(`${c}.100`, `${c}.100`)(props),
    color: mode(`${c}.160`, `${c}.160`)(props),
    _hover: { bg: mode(`${c}.80`, `${c}.80`)(props) },
    _active: { bg: mode(`${c}.120`, `${c}.120`)(props) },
  };
}

function getAttentionStyle(props: Props) {
  const c = 'attention';

  return {
    bg: mode(`${c}.100`, `${c}.100`)(props),
    color: mode(`white`, `white`)(props),
    _hover: { bg: mode(`${c}.80`, `${c}.80`)(props) },
    _active: { bg: mode(`${c}.120`, `${c}.120`)(props) },
  };
}

function getLinkStyle(props: Props) {
  const { colorScheme: c } = props;
  return {
    padding: 0,
    height: 'auto',
    lineHeight: 'normal',
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: 'underline',
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props),
    },
  };
}

const sizes = {
  xg: {
    height: '60px',
    minWidth: '150px',
    fontSize: '20',
    paddingX: '46px',
  },
  lg: {
    height: '50px',
    minWidth: '120px',
    fontSize: '18',
    paddingX: '28px',
  },
  md: {
    height: '40px',
    minWidth: '90px',
    fontSize: '16',
    paddingX: '20px',
  },
  sm: {
    height: '30px',
    minWidth: '70px',
    fontSize: '14',
    paddingX: '12px',
  },
  xs: {
    height: '24px',
    minWidth: '60px',
    fontSize: '12',
    paddingX: '8px',
  },
};

////////////////////////////////////////////////////////////

const unstyled = {
  bg: 'none',
  border: 0,
  color: 'inherit',
  display: 'inline',
  font: 'inherit',
  lineHeight: 'inherit',
  margin: 0,
  padding: 0,
};

////////////////////////////////////////////////////////////
const Button: ComponentTheme = {
  defaultProps: {
    variant: 'solid',
    size: 'md',
    colorScheme: 'gray',
  },
  baseStyle: {
    lineHeight: '1.2',
    borderRadius: 'md',
    fontWeight: 'semibold',
    _focus: {
      boxShadow: 'outline',
    },
    _disabled: {
      opacity: 0.5,
      cursor: 'not-allowed',
      boxShadow: 'none',
    },
  },
  sizes,
  variants: {
    unstyled,
    primary: getPrimaryStyle,
    secondary: getSecondaryStyle,
    super: getSuperStyle,
    attention: getAttentionStyle,
    solid: getSolidStyle,
    ghost: getGhostStyle,
    link: getLinkStyle,
    outline: getOutlineStyle,
  },
};

export const ButtonTokens = {
  sizes: {
    xg: 'xg',
    lg: 'lg',
    sm: 'sm',
    md: 'md',
    xs: 'xs',
  },
  variants: {
    primary: 'primary',
    secondary: 'secondary',
    super: 'super',
    attention: 'attention',
    solid: 'solid',
    subtle: 'subtle',
    outline: 'outline',
  },
};

export default Button;
