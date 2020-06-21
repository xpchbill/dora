import React from 'react';
import { Stack, Link } from '@ALK-UI/core';

export const AuthFooter: React.FC = () => {
  return (
    <Stack
      bg="white"
      h="50px"
      align="center"
      px="30px"
      direction="row"
      justify="center"
      color="gray2.90"
      fontSize="11px"
      spacing="30px"
      boxShadow="sm"
    >
      <img src="/logo-active.svg" alt="Active Logo" />
      <Link isExternal href="http://www.active.com/page/about/">
        About
      </Link>
      <Link isExternal href="http://activesupport.force.com/usersupport">
        Support
      </Link>
      <Link
        isExternal
        href="http://www.activenetwork.com/information/terms-of-use"
      >
        Terms
      </Link>
      <Link isExternal href="http://activesupport.force.com/usersupport">
        Copyright
      </Link>
      <Link
        isExternal
        href="http://www.activenetwork.com/information/privacy-policy"
      >
        Privacy
      </Link>
      <Link isExternal href="http://www.activenetwork.com">
        © 2019 Active Network. All rights reserved.
      </Link>
    </Stack>
  );
};

export default AuthFooter;
