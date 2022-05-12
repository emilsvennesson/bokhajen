import { Box, Paper, Skeleton, Stack } from '@mui/material';
import React from 'react';

export default function AdSkeleton() {
  console.log('hello');
  return (
    <Paper
      elevation={2}
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        height: '80px',
        maxWidth: '100%',
        alignItems: 'center',
        borderRadius: 1,
        px: 2,
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Skeleton variant="circular" height={40} width={40} />
        <Stack sx={{ ml: 1 }}>
          <Skeleton variant="text" width={120} />
          <Skeleton variant="text" width={100} />
        </Stack>
      </Box>
      <Box>
        <Skeleton variant="text" width={100} />
      </Box>
    </Paper>
  );
}
