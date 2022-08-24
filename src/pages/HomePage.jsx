import React from 'react';
import "../styles/HomePage.css"
import { Box } from "@mui/material"

const HomePage = () => {



  return (
    <Box sx={{display: 'flex', justifyContent: 'center', width: '70%', mx: 'auto', minHeight: '80vh'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', width: '30%', bgcolor: 'lightblue'}}>
        sidebar
      </Box>
      <Box sx={{display: 'flex', flexDirection: 'column', width: '70%', bgcolor: 'lightgreen'}}>
        scroll
      </Box>
    </Box>
  );
};

export default HomePage;