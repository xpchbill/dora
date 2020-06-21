import React from 'react';
import { Flex } from '@ALK-UI/core';

export const AuthHeader: React.FC = () => {
  return (
    <Flex
      bg="gray2.110"
      h="50px"
      color="white"
      fontSize="24px"
      align="center"
      px="30px"
      fontStyle="italic"
    >
      ActiveLink Logo
    </Flex>
  );
};

export default AuthHeader;
