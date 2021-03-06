import * as React from 'react';
import { Skeleton, SkeletonText, SkeletonCircle } from '.';
import { chakra, DarkMode } from '@ALK-UI/system';
import { Stack } from '@ALK-UI/layout';

export default {
  title: 'Skeleton',
  decorators: [
    (story: Function) => (
      <chakra.div maxW="md" mt="40px" mx="auto">
        {story()}
      </chakra.div>
    ),
  ],
};

// Get more examples from here:
// https://danilowoz.com/create-content-loader/

export const Basic = () => <Skeleton h="20px" />;

export const Text = () => (
  <SkeletonText padding="20px" borderWidth="1px" borderRadius="lg" />
);

export const AsContainer = () => (
  <Skeleton>
    <span>Chakra ui is cool</span>
  </Skeleton>
);

export const WithFade = () => {
  const [hasLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setHasLoaded(true), 1000);
  }, []);

  return (
    <Skeleton hasLoaded={hasLoaded}>
      <span>Chakra ui is cool</span>
    </Skeleton>
  );
};

export const WithNoFade = () => {
  const [hasLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setHasLoaded(true), 1000);
  }, []);

  return (
    <Skeleton fadeDuration={0} hasLoaded={hasLoaded}>
      <span>Chakra ui is cool</span>
    </Skeleton>
  );
};

export const Circle = () => <SkeletonCircle />;

export const Combined = () => (
  <chakra.div padding="6" boxShadow="lg" bg="white">
    <SkeletonCircle size="10" />
    <SkeletonText mt="4" noOfLines={4} spacing="4" />
  </chakra.div>
);

export const WithIsLoaded = () => {
  const [hasLoaded, setHasLoaded] = React.useState(false);

  React.useEffect(() => {
    const intervalId = setInterval(() => setHasLoaded(x => !x), 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <chakra.div>
      <chakra.div h="100px" borderWidth="1px">
        Content
      </chakra.div>
      <Skeleton w="100px" hasLoaded={hasLoaded}>
        <span>Chakra ui is cool</span>
      </Skeleton>
      <chakra.div h="100px" borderWidth="1px">
        Content
      </chakra.div>
    </chakra.div>
  );
};

export const WithCustomSpeed = () => (
  <Skeleton boxSize="100px" speed={2.4} borderRadius="100px" />
);

export const WithDarkMode = () => (
  <DarkMode>
    <Stack>
      <chakra.p>Some text</chakra.p>
      <Skeleton boxSize="100px" />
      <Skeleton boxSize="100px" />
      <Skeleton boxSize="100px" />
    </Stack>
  </DarkMode>
);
