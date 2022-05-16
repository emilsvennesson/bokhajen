import { Box, Grid, IconButton, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import { blueGrey } from '@mui/material/colors';

export default function Footer() {
  return (
    <Box
      sx={{
        bottom: 0,
        width: '100%',
        bgcolor: blueGrey[700],
        pt: '3em',
        pb: '3em',
      }}
    >
      <Grid container spacing="3em" sx={{ pr: '3em', pl: '3em' }}>
        <Grid item xs={12} sm={4}>
          <Stack>
            <Box borderBottom={1} marginBottom={1} color="lightgrey">
              Kontakta oss
            </Box>
            <Typography color="lightgrey">
              Café Bulten, Hörsalsvägen 7, 412 58 Göteborg
            </Typography>
            <Link
              component="a"
              href="mailto:bokhajen@gmail.com"
              color="lightgrey"
              underline="hover"
            >
              bokhajen@gmail.com
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Stack>
            <Box borderBottom={1} marginBottom={1} color="lightgrey">
              Läs mer
            </Box>
            <Link href="/omoss" underline="hover" color="lightgrey">
              Om oss
            </Link>
            <Link href="/regler&villkor" underline="hover" color="lightgrey">
              Regler & Villkor
            </Link>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box borderBottom={1} marginBottom={1} color="lightGrey">
            Länkar
          </Box>
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
