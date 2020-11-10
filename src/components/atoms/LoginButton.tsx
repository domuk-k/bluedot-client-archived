import { Button } from '@chakra-ui/core';
import React from 'react';
import { SearchIcon } from '@chakra-ui/icons';

type LoginProps = {
  onClick(): void;
};

const LoginButton: React.FC<LoginProps> = ({ onClick }) => {
  return (
    <>
      <SearchIcon />
      <Button bg="primary.700" onClick={onClick}>
        회원가입/로긴
      </Button>
    </>
  );
};

export default LoginButton;
