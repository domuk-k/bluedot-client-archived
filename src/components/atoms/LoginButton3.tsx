import {
  Box,
  Button,
  CloseButton,
  Flex,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import LoginModal from '../modules/LoginModal';
import usePortal from '../../hooks/usePortal';

interface Props {}

const LoginButton = (props: Props) => {
  const {
    isOpen,
    openPortal,
    closePortal,
    Portal,
  } = usePortal();

  return (
    <Box>
      <SearchIcon />
      <Button bg="primary.700" onClick={openPortal}>
        회원가입/로긴
      </Button>
      {isOpen && (
        <Portal>
          <Flex
            pos="absolute"
            top="0"
            w="100vw"
            h="100vh"
            justify="center"
            align="center"
            bg={'rgba(0,0,0,.6)'}
            zIndex="3"
            onClick={closePortal}
          >
            <Box
              w="45vw"
              h="45vh"
              bg="cyan.500"
              pos="relative"
              ani
            >
              <LoginModal />
              <CloseButton
                onClick={closePortal}
                pos="absolute"
                top="0"
                right="0"
              />
            </Box>
          </Flex>
        </Portal>
      )}
    </Box>
  );
};

export default LoginButton;
