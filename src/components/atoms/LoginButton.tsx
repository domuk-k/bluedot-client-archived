import {
  Box,
  Button,
  CloseButton,
  Flex,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/core';
import React, { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import LoginModal from '../modules/LoginModal';
import usePortal from '../../hooks/usePortal';

interface Props {}

const LoginButton = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SearchIcon />
      <Button bg="primary.700" onClick={onOpen}>
        회원가입/로긴
      </Button>
      {isOpen && (
        <Modal
          blockScrollOnMount={true}
          closeOnOverlayClick={true}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          preserveScrollBarGap
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader textAlign="center">
              로그인하기
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box as="label">이메일</Box>
              <Input />
            </ModalBody>

            <ModalFooter>
              <Button
                variantColor="blue"
                mr={3}
                onClick={onClose}
              >
                확인
              </Button>
              <Button variant="ghost">취소</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default LoginButton;
