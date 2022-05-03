import { Box, CircularProgress } from '@mui/material';
import React from 'react';

export default function OverlayCircularProgress() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
