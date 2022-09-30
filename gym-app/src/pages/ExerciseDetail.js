import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';




import SimilarExercises from '../components/SimilarExercises';
import ExercisesVideos from '../components/ExercisesVideos';
import Detail from '../components/Detail ';

const ExerciseDetail = () => {
  
  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail />
      <ExercisesVideos />
      <SimilarExercises />
    </Box>
  );
};

export default ExerciseDetail;