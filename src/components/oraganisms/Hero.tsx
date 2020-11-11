import { AspectRatio, Box, Img } from '@chakra-ui/core';
import React from 'react';

interface Props {}

const Hero = (props: Props) => {
  return (
    <Box as="section" height="500px" pos="relative">
      <Img
        src="https://t1.daumcdn.net/brunch/service/user/7J2z/image/01cda2WH_NhJdq8JCCv4l5LlD_Y.jpg"
        alt="naruto"
        objectFit="contain"
      />
      <Box
        pos="absolute"
        w="30vw"
        color="grey"
        bottom="20px"
      >
        <Box as="h3" fontSize="1.6rem">
          닷비디오
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
