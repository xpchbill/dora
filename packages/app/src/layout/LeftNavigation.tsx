import React from 'react';
import { Flex } from '@ALK-UI/core';
import { User } from '../types';

type LeftNavigationProps = {
  currentUser?: User;
  children?: React.ReactNode;
};

export const LeftNavigation: React.FC = (props: LeftNavigationProps) => {
  return (
    <Flex bg="gray2.40" w="260px" align="center" px="30px" boxShadow="sm">
      {`Left Menu`}
    </Flex>
  );
};

export default LeftNavigation;
