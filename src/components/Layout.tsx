import { Flex } from '@chakra-ui/core';
import React from 'react';

const Layout: React.FC = (props) => {
  return (
    <Flex
      direction="column"
      align="center"
      {...props}
      color={'basicBlack'}
    />
  );
};

export default Layout;
