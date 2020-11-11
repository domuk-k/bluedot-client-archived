import { Box, Button } from '@chakra-ui/core';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

// type SocialButtonProps = {
//   name: string;
// };

const SocialLoginButton /*: React.FC<SocialButtonProps> */ = ({
  name,
}) => {
  const socialLogo =
    name === '구글' ? FcGoogle : FaFacebook;

  return (
    <>
      <Button
        bg="white"
        border="1px lightgrey solid"
        w="100%"
        color="dimgrey"
        fontWeight="semiregular"
        fontSize=".9rem"
        _hover={{ background: 'custom.subtle' }}
        _active={{ background: 'custom.subtle' }}
      >
        <Box
          as={socialLogo}
          mr="2"
          mt="0.5"
          color="#1877F2"
          fontSize={'1.05rem'}
        />
        {name}으로 로그인하기
      </Button>
    </>
  );
};

export default SocialLoginButton;
