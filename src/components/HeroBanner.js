import React from "react";
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.jpg';


const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: {
          lg: '212px',
          xs: '70px'
        },
        ml: { sm: '50px' }
      }}
      position="relative"
      p="20px">

      <Typography
        color='#3792cb'
        fontWeight="600"
        fontSize="26px">Fitness App
      </Typography>

      <Typography
        fontWeight={700}
        color='#3792cb'

        sx={{
          fontSize: {
            lg: '44px',
            xs: '40px'
          }
        }}
        mb="23px"
        mt="30px">
          
        Keep challenging
        <br />
        yourself
      </Typography>

      <Typography
        fontSize="22px"
        fontFamily="Alegreya"
        lineHeight="35px"
        mb={4}>
      </Typography>

      <Button
        variant="contained"
        href="#exercises"
        sx={{ padding: '10px' }}
      >Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color='#3792cb'
        sx={{
          opacity: '0.1',
          display: { lg: 'block', xs: 'none' },
          fontSize: '108px',
          padding: "30px"
        }}>
        Exercise
      </Typography>

      <img src={HeroBannerImage}
        alt="hero-banner"
        className="hero-banner-img"
      />
    </Box>

  )
};

export default HeroBanner;