import { Box, Flex, Grid, ListItem } from '@chakra-ui/core';
import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import CarouselContainer from '../modules/CarouselContainer';
import PostsList from '../modules/PostsList';

interface Props {}

function MainContents(): ReactElement {
  return (
    <Box bg="yellow.100">
      <CarouselContainer />
      <PostsList />
    </Box>
  );
}

export default MainContents;
