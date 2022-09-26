import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material';
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutMe from './pages/AboutMe';

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: '1488' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/excersise/:id" element={<ExerciseDetail />} />
        <Route path="/" element={<AboutMe />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
