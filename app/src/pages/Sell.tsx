import React from 'react';
import { Box } from '@mui/material';
import BookInformationInput from '../components/BookInformationInput';
import BookConditionChecklist from '../components/BookConditionChecklist';
import SearchBook from '../components/SearchBook';

/**
 * Selling page, in this window the user is able to upload a book to the selling page
 * @returns Sell page
 */
export default function Sell() {
  /**
   * Placeholder functionfor the Search
   * @param name
   */
  const search = (name: String) => {
    console.log(name);
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{ backgroundColor: '#C4C4C4', padding: '50px' }}
    >
      <SearchBook bookSearchHandler={search} />
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
