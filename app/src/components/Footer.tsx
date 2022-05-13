import { Box, IconButton } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { orange } from '@mui/material/colors';

export default function Footer() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        mb: 0,
        width: '100%',
        bgcolor: orange[700],
        pt: '3em',
        pb: '3em',
      }}
    >
      <IconButton
        onClick={() => {
          window.open('https://github.com/emilsvennesson/dat257-xzibit');
        }}
      >
        <GitHubIcon sx={{ fontSize: '40px', color: 'black' }} />
      </IconButton>
    </Box>
  );
}
