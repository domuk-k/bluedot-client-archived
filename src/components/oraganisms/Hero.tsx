import { AspectRatio, Box, Img } from '@chakra-ui/core';
import React from 'react';

interface Props {}

const Hero = (props: Props) => {
  return (
    <Box as="section" pos="relative" height="500px">
      <AspectRatio ratio={16 / 9} w="100vw" h="45vh">
        <Img
          src="https://t1.daumcdn.net/brunch/service/user/7J2z/image/01cda2WH_NhJdq8JCCv4l5LlD_Y.jpg"
          alt="naruto"
          objectFit="contain"
        />
      </AspectRatio>
      <Box
        pos="absolute"
        top="50%"
        left="60%"
        w="30vw"
        color="white"
      >
        <Box as="h3" fontSize="1.6rem">
          <h2>닷비디오</h2>
        </Box>
        <Box as="p" fontSize="1rem">
          Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Iste tempora dolores voluptatum
          fugit repellendus, numquam quos!
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
