import * as React from 'react';
import Router from './router';
import { CSSReset, ChakraProvider } from '@chakra-ui/core';
import customTheme from './utils/customTheme';

export const App: React.FC = () => (
  <ChakraProvider theme={customTheme} resetCSS={true}>
    <CSSReset />
    <Router />
  </ChakraProvider>
);
