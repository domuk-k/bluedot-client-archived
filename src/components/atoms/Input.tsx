import React from 'react';
import {
  Input as ChakraInput,
  InputProps,
} from '@chakra-ui/core';

const Input = (props: InputProps) => {
  return (
    <ChakraInput borderColor="lightgray" {...props}>
      {props.children}
    </ChakraInput>
  );
};

export default Input;
