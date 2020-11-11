import { Box, Button, Icon } from '@chakra-ui/core';
import React, { useState } from 'react';
import { SearchIcon } from '@chakra-ui/icons';
import LoginModal from '../modules/LoginModal';

interface Props {}

const LoginButton = (props: Props) => {
  const [visible, setVisible] = useState(false);
  const toggleModal = () => setVisible(!visible);
  return (
    <Box>
      {/* <SearchIcon mr="20px" /> */}
      <Button bg="primary.700" onClick={toggleModal}>
        회원가입/로긴
      </Button>
      {visible && <LoginModal />}
    </Box>
  );
};

export default LoginButton;
