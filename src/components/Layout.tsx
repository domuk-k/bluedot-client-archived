import {
  Box,
  Button,
  Flex,
  Heading,
  MenuItem,
  Text,
} from '@chakra-ui/core';
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
