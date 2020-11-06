import { Box, Button, Flex, Icon } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import LoginButton from '../atoms/LoginButton';
import Logo from '../atoms/Logo';
import NavList from '../atoms/NavList';

interface Props {}

export default function Navigation(): ReactElement {
  return (
    <Box
      as="nav"
      p=".5rem"
      bg="black"
      color="white"
      w="100vw"
      userSelect="none"
    >
      <Flex
        className="header-container"
        align="center"
        justify="space-between"
        w="80vw"
        m="auto"
      >
        <Logo />
        <NavList />
        <LoginButton />
      </Flex>
    </Box>
  );
}
