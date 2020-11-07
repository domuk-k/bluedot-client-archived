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
      color="white"
      w="100vw"
      userSelect="none"
      bg="transparent"
      pos="fixed"
      zIndex="2"
      style={{ backdropFilter: 'blur(5px)' }}
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
