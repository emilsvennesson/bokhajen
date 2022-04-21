import React from 'react';
import { Box, Stack, Typography, Button, Grow, TextField } from '@mui/material';
import BookInformation from '../components/BookInformation';

const startedWindow = (
  <Box height={445} width="30%" sx={{ backgroundColor: 'white' }} />
);

/**
 * Selling page, in this window the user is able to upload a book to the selling page
 * @returns Sell page
 */
export default function Sell() {
  const [started, setStarted] = React.useState(false);
  const [checked, setChecked] = React.useState(false);

  return (
    <Stack
      padding="2%"
      sx={{ backgroundColor: '#C4C4C4' }}
      direction="column"
      spacing={2}
    >
      {/** Title */}
      <Box
        sx={{ backgroundColor: 'white' }}
        borderRadius="8px"
        padding={5}
        flexGrow={3}
      >
        <Typography variant="h3" margin="30px">
          Sell your book
        </Typography>
        <Typography variant="h6" margin="20px">
          If you want to publish an add for your book there are three steps you
          need to go trough. First you need to fill out the ISBN number in order
          for us to know wich book you want to sell
        </Typography>
      </Box>
      {/** Wizard */}
      <Stack direction="row" width="100%" spacing={2}>
        {/** Search ISBN */}
        <Stack
          flexGrow={4}
          sx={{ backgroundColor: 'white' }}
          alignItems="center"
          spacing={5}
          paddingTop={5}
          borderRadius={2}
        >
          <Typography variant="h2">Get started</Typography>
          <TextField label="ISBN-number" />
          <Button
            size="large"
            variant="contained"
            onClick={() => setStarted(true)}
          >
            {'Get started ->'}
          </Button>
        </Stack>
        {/** Check information */}
        <Grow in={started}>
          <Box>
            <BookInformation
              name="Mattematisk statistik"
              edition="4th"
              year="1992"
              ISBN="11111222223333"
              course="Mattematisk statistik och descret mattematik"
            />
            <Button variant="contained" size="large">
              Redigera
            </Button>
            <Button
              variant="contained"
              size="large"
              onClick={() => setChecked(true)}
            >
              Continue
            </Button>
          </Box>
        </Grow>

        {/** Set quality */}
        <Grow in={checked}>{startedWindow}</Grow>
      </Stack>
    </Stack>
  );
}
