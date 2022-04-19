import React from 'react';
import { Box, Typography } from '@mui/material';

interface BookInformationProps {
  name: String;
  edition: String;
  year: String;
  ISBN: String;
  course: String;
}

export default function BookInformation({
  name,
  edition,
  year,
  ISBN,
  course,
}: BookInformationProps) {
  return (
    <Box
      display="flex"
      flexGrow={0.5}
      borderRadius="8px"
      sx={{ backgroundColor: 'white', padding: '40px' }}
      marginRight="20px"
      alignItems="center"
      flexDirection="column"
    >
      {/* LEFT Container */}

      {/* Image */}
      <Box width={200} height={300} sx={{ backgroundColor: 'red' }} />
      <Box
        width={500}
        flexGrow={4}
        display="flex"
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Typography
          variant="h5"
          sx={{
            border: 'solid black 1px',
            borderRadius: '3px',
            padding: '5px',
          }}
        >
          Name: {name}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            border: 'solid black 1px',
            borderRadius: '3px',
            padding: '5px',
          }}
        >
          Edition: {edition}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            border: 'solid black 1px',
            borderRadius: '3px',
            padding: '5px',
          }}
        >
          Year: {year}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            border: 'solid black 1px',
            borderRadius: '3px',
            padding: '5px',
          }}
        >
          ISBN-Nummer: {ISBN}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            border: 'solid black 1px',
            borderRadius: '3px',
            padding: '5px',
          }}
        >
          Course: {course}
        </Typography>
      </Box>
    </Box>
  );
}
