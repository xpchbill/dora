import React from 'react';
import { chakra } from '@ALK-UI/core';

type MainLayoutProps = {
  children?: React.ReactNode;
};

const StyledContainer = chakra('div', {
  baseStyle: {
    display: 'flex',
    width: '100%',
    height: '100vh',
    alignItems: 'center',
    flexDirection: 'column',
    placeItems: 'stretch',
  },
});

export const MainLayout: React.FC = (props: MainLayoutProps) => {
  return <StyledContainer>{props.children}</StyledContainer>;
};

export default MainLayout;
