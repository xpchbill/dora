import React from 'react';
import { chakra, Flex } from '@ALK-UI/core';
import LeftNavigation from './LeftNavigation';

type MainContentProps = {
  children?: React.ReactNode;
};

const StyledContainer = chakra('div', {
  baseStyle: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'start',
    placeItems: 'stretch',
    flex: '1 1 auto',
  },
});

export const MainContent: React.FC = (props: MainContentProps) => {
  return (
    <StyledContainer>
      <LeftNavigation />
      <Flex p="20px" justify="start" grow={1}>
        {props.children}
        {/* <App /> */}
      </Flex>
    </StyledContainer>
  );
};

export default MainContent;
