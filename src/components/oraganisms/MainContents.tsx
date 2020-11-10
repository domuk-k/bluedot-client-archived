import { Box } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import CarouselContainer from '../modules/CarouselContainer';
import PostsList from '../modules/PostsList';

function MainContents(): ReactElement {
  return (
    <Box bg="yellow.100">
      <CarouselContainer />
      <PostsList />
    </Box>
  );
}

export default MainContents;
