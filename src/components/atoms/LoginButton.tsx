import { Button, useDisclosure } from '@chakra-ui/core';
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import LoginModal from '../modules/LoginModal';

interface Props {}

const LoginButton: React.FC<{}> = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = (values: any) => {
    console.log(values);

    alert(values);
  };
  return (
    <>
      <SearchIcon />
      <Button bg="primary.700" onClick={onOpen}>
        회원가입/로긴
      </Button>
      {isOpen && (
        <LoginModal isOpen={isOpen} onClose={onClose} />
      )}
    </>
  );
};

export default LoginButton;
