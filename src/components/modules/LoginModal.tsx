import { Box } from '@chakra-ui/core';
import React from 'react';

interface Props {}

const LoginModal = (props: Props) => {
  return (
    <Box color="white">
      <Box pos="absolute" top="0">
        로그인하세
      </Box>
    </Box>
  );
};

export default LoginModal;
