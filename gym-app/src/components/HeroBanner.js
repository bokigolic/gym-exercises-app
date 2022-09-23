import React from "react";
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.jpg';


const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">Fitness App</Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
        Keep challenging <br />
        yourself
      </Typography>
      <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={3}>
        Check out the most effective exercises personalized to you
      </Typography>
      <Button variant="contained" href="#exercises">Explore Exercises</Button>
      <Typography fontWeight={600} color="blue" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '180px' }}>
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </Box>

  )
};

export default HeroBanner;