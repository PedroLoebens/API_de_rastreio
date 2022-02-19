import * as React from 'react';
import Box from '@mui/material/Box';

 function BoxSx() {
  return (
    <Box
      sx={{
        width: 500,
        height: 500,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
} 

export default BoxSx;