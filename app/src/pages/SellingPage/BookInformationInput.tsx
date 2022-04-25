import React from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

export default function BookInformationInput() {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Typography variant="h3">Book Information</Typography>
      <Stack
        direction="column"
        spacing={4}
        margin={8}
        marginLeft={0}
        sx={{ width: '100%' }}
      >
        <TextField id="outlined-basic" label="Name" variant="outlined" />
        <TextField id="outlined-basic" label="Edition" variant="outlined" />
        <TextField id="outlined-basic" label="Year" variant="outlined" />
        <TextField id="outlined-basic" label="ISBN-Number" variant="outlined" />
        <TextField id="outlined-basic" label="Course" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Short describtion of the quality"
          variant="outlined"
        />
      </Stack>
      <Button>Upload image</Button>
    </Box>
  );
}
