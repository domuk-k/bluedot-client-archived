import * as React from 'react';
import Layout from '../components/Layout';
import { Box } from '@chakra-ui/core';
import Navigation from '../components/oraganisms/Navigation';
import MainContents from '../components/oraganisms/MainContents';
import Hero from '../components/oraganisms/Hero';

const Home = () => {
  return (
    <Layout>
      <Navigation />
      <Hero />
      <Box bg="brown.100" w="90vw">
        <MainContents />
      </Box>
    </Layout>
  );
};

export default Home;
