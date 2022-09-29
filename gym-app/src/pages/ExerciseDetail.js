import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { exerciseOptions, fetchData, youtubeOptions } from '../utils/fetchData';

const ExerciseDetail = () => {
  return (
    <Box>
      <Detal />
      <ExercisesVideos />
      <SimilarExercises />

    </Box> 
  )


};

export default ExerciseDetail;