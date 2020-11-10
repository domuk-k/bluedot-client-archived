import React from 'react';
import { Input as ChakraInput } from '@chakra-ui/core';

const Input = (props) => {
  return (
    <ChakraInput borderColor="lightgray" {...props} _hover>
      {props.children}
    </ChakraInput>
  );
};

export default Input;
