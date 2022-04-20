import React from 'react';
import { Box, Button, Fade, Typography } from '@mui/material';

import BookInformation from '../components/BookInformation';

/**
 * Selling page, in this window the user is able to upload a book to the selling page
 * @returns Sell page
 */
export default function Sell() {
  const [checked, setChecked] = React.useState(false);

  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ backgroundColor: '#C4C4C4' }}
    >
      {/* Title */}
      <Box
        sx={{ backgroundColor: 'white' }}
        marginBottom="40px"
        borderRadius="8px"
        padding={5}
      >
        <Typography variant="h3" margin="30px">
          Sell your book
        </Typography>
        <Typography variant="h6" margin="20px">
          If you want to publish an add for your book there are three steps you
          need to go trough. First you need to fill out the ISBN number in order
          for us to know wich book you want to sell
        </Typography>
        {/* Step 1, look upp your book */}
      </Box>
      <Button onClick={() => setChecked(true)}>Hej</Button>

      {/* Step 2, Check information */}
      <Fade in={checked}>
        <Box
          sx={{
            height: '80%',
            width: '100%',
            backgroundColor: 'white',
            position: 'absolute',
            borderRadius: 8,
          }}
          display="flex"
          justifyContent="center"
        >
          <Button
            onClick={() => setChecked(false)}
            sx={{ position: 'absolute', right: 0 }}
          >
            x
          </Button>

          <BookInformation
            name="hej"
            edition="hej2"
            year="1882"
            ISBN="11111112222"
            course="hej"
          />
        </Box>
      </Fade>
      {/* Step 3, Describe quality */}
    </Box>
  );
}
