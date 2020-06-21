import React from 'react';
import { chakra } from '@ALK-UI/core';
import AuthHeader from './AuthHeader';
import AuthFooter from './AuthFooter';

const StyledContainer = chakra('div', {
  baseStyle: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-between',
    placeItems: 'stretch',
    // backgroundColor: 'gray2.30',
  },
});

export const AuthMainLayout: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <AuthHeader />
      {children}
      <AuthFooter />
    </StyledContainer>
  );
};

export default AuthMainLayout;
