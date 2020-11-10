import {
  Box,
  Flex,
  Modal,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/core';
import React, { ReactElement, useState } from 'react';
import { Redirect } from 'react-router-dom';
import LoginButton from '../atoms/LoginButton';
import Logo from '../atoms/Logo';
import NavList from '../atoms/NavList';
import MailCheckModal from '../modules/MailCheckModal';
import SignUpModal from '../modules/SignUpModal';

enum ModalTypes {
  mailCheck,
  signIn,
}

export default function Navigation(): ReactElement {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modal, setModalMode] = useState(
    ModalTypes['mailCheck']
  ); //enum?
  const signInAndUp = () => {
    setModalMode(0);
    onOpen();
  };
  console.log(modal);

  const TypedModal = (type: ModalTypes) => {
    switch (type) {
      case 0:
        return (
          <MailCheckModal setModalMode={setModalMode} />
        );
      case 1:
        return <SignUpModal setModalMode={setModalMode} />;

      default:
        return <Redirect to="/" />;
    }
  };
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
        <LoginButton onClick={signInAndUp} />
        {isOpen && (
          <Modal
            blockScrollOnMount={true}
            closeOnOverlayClick={true}
            isOpen={isOpen}
            onClose={onClose}
            isCentered
            preserveScrollBarGap
            closeOnEsc
          >
            <ModalOverlay />
            {TypedModal(modal)}
          </Modal>
        )}
      </Flex>
    </Box>
  );
}
