import { Box, Grid, IconButton, Link, Stack } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { orange } from '@mui/material/colors';

export default function Footer() {
  return (
    <Box
      sx={{
        bottom: 0,
        width: '100%',
        bgcolor: orange[700],
        pt: '3em',
        pb: '3em',
      }}
    >
      <Grid container spacing={10} sx={{ pr: '3em', pl: '3em' }}>
        <Grid item xs={12} sm={4}>
          <Stack>
            <Box borderBottom={1} marginBottom={1}>
              Kontakta oss
            </Box>
            <Link href="/" underline="hover" color="inherit">
              Om oss
            </Link>
            <Link href="/" underline="hover" color="inherit">
              Regler & Villkor
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={1}>Kontakta oss</Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={1}>Länkar</Box>
          <IconButton
            onClick={() => {
              window.open('https://github.com/emilsvennesson/dat257-xzibit');
            }}
          >
            <GitHubIcon sx={{ fontSize: '40px', color: 'black' }} />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
}
