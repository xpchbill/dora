import React, { useEffect } from 'react';
import { chakra, Box, Spinner } from '@ALK-UI/core';

const StyledOverlay = chakra('div', {
  // themeKey: 'Modal.Overlay',
  baseStyle: () => ({
    // bg: 'rgba(0, 0, 0, 0.4)',
    bg: 'rgba(255, 255, 255, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    position: 'fixed',
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
    width: '100%',
    height: '100%',
    zIndex: 9999,
  }),
});

export const Loading: React.FC = () => {
  return (
    <Box>
      <StyledOverlay>
        <Spinner
          size="xl"
          speed="0.65s"
          color="brand.120"
          emptyColor="gray.400"
          thickness="4px"
        />
      </StyledOverlay>
    </Box>
  );
};

export default Loading;
