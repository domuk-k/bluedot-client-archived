import {
  Box,
  Center,
  Flex,
  Grid,
  List,
  ListItem,
} from '@chakra-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {}

const Carousel = (props: Props) => {
  return (
    <Box
      as="section"
      width="90%"
      m="0 auto"
      p="20px 0"
      bg="cyan.100"
    >
      <Box>
        <Box as="h2" d="inline-block" mr="1rem">
          아티스트 소개
        </Box>
        <Link to="/artists" style={{ fontSize: '.5rem' }}>
          전체 보기
        </Link>
      </Box>
      <List
        display="flex"
        wrap="nowrap"
        w="100%"
        h="100%"
        border="1px solid grey"
        overflowX="auto"
        align="center"
        listStyleType="none"
      >
        {Array(10)
          .fill(1)
          .map((v, i) => (
            <ListItem
              margin="0 10px"
              outline="solid 3px orange"
              h="80px"
              key={i}
            >
              <Center w="100px" h="100%" bg="blue.100">
                {v}
              </Center>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Carousel;
