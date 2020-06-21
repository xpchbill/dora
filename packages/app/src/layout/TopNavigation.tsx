import React from 'react';
import { Flex, Text } from '@ALK-UI/core';
import { AccountInfo } from './AccountInfo';
import { User } from '../types';

type TopNavigationProps = {
  currentUser?: User;
  children?: React.ReactNode;
};

export const TopNavigation: React.FC = (props: TopNavigationProps) => {
  return (
    <Flex
      bg="gray2.110"
      h="50px"
      align="center"
      px="10px"
      justify="space-between"

    >
      <Text
        px="20px"
        color="white"
        fontSize="24px"
        fontStyle="italic"
      >
        ActiveLink Logo
      </Text>
      <AccountInfo />
    </Flex>
  );
};

export default TopNavigation;
