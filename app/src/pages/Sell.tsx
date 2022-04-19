import React from 'react';
import { Box } from '@mui/material';
import BookInformationInput from '../components/BookInformationInput';
import BookConditionChecklist from '../components/BookConditionChecklist';

export default function Sell() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      sx={{ backgroundColor: '#C4C4C4', padding: '50px' }}
    >
      <Box flexGrow={2}>
        {/* LEFT Container */}

        {/* Image */}
        <Box>Image</Box>

        {/* Checklist */}
        <BookConditionChecklist />
      </Box>
      <Box
        display="flex"
        flexGrow={1}
        borderRadius="8px"
        sx={{ backgroundColor: 'white', padding: '40px' }}
      >
        {/* RIGHT Container */}
        <BookInformationInput />
      </Box>
    </Box>
  );
}
