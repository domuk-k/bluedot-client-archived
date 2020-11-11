import { AspectRatio, Box, Img } from '@chakra-ui/core';
import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Props {}

const Hero = (props: Props) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <Box as="section" pos="relative" height="500px">
      {/* <AspectRatio ratio={16 / 9} w="100vw" h="45vh"> */}
      {/* <Img
          src="https://t1.daumcdn.net/brunch/service/user/7J2z/image/01cda2WH_NhJdq8JCCv4l5LlD_Y.jpg"
          alt="서페스타입니다"
          objectFit="contain"
        /> */}
      <Box w="90vw">
        <Box as={Slider} {...settings}>
          <Box
            fontSize="2rem"
            w="100%"
            h="500px"
            bg="url(https://t1.daumcdn.net/brunch/service/user/7J2z/image/01cda2WH_NhJdq8JCCv4l5LlD_Y.jpg)"
            m={0}
            backgroundSize="contain"
            color="white"
          >
            1
          </Box>
          <Box
            fontSize="2rem"
            w="100%"
            h="500px"
            bg="url(https://t1.daumcdn.net/brunch/service/user/7J2z/image/01cda2WH_NhJdq8JCCv4l5LlD_Y.jpg)"
            m={0}
            backgroundSize="contain"
            color="white"
          >
            2
          </Box>
          <Box
            fontSize="2rem"
            w="100%"
            h="500px"
            bg="url(https://t1.daumcdn.net/brunch/service/user/7J2z/image/01cda2WH_NhJdq8JCCv4l5LlD_Y.jpg)"
            m={0}
            backgroundSize="contain"
            color="white"
          >
            3
          </Box>
          <Box
            fontSize="2rem"
            w="100%"
            h="500px"
            bg="url(https://t1.daumcdn.net/brunch/service/user/7J2z/image/01cda2WH_NhJdq8JCCv4l5LlD_Y.jpg)"
            m={0}
            backgroundSize="contain"
            color="white"
          >
            4
          </Box>
        </Box>
      </Box>
      {/* </AspectRatio> */}
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
