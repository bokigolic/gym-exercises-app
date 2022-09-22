import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material';
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail';

function App() {
  return (
    <Box width="400px">
      Navbar
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excersise/:id" element={<ExerciseDetail />} />
      </Routes>
    </Box>
  );
}

export default App;