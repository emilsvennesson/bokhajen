import React from 'react';
import { Box, Typography } from '@mui/material';
import BookInformationInput from '../components/BookInformationInput';
import SearchBook from '../components/SearchBook';
import BookInformation from '../components/BookInformation';

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
      {/* Title */}
      <Box
        sx={{ backgroundColor: 'white' }}
        marginBottom="40px"
        borderRadius="8px"
      >
        <Typography variant="h3" margin="30px">
          Sell your book
        </Typography>
        <Typography variant="h6" margin="20px">
          If you want to publish an add for your book there are three steps you
          need to go trough
        </Typography>
      </Box>

      {/* Step 1, look upp your book */}
      <SearchBook bookSearchHandler={search} />

      {/* Step 2, Check information */}
      <Box display="flex" flexDirection="row" marginTop="40px">
        <BookInformation
          name="Mattematisk statistik"
          edition="4th"
          year="1994"
          ISBN="111222233334444"
          course="Mattematisk statistik och discret mattematik"
        />
        <Box
          display="flex"
          flexGrow={2}
          borderRadius="8px"
          sx={{ backgroundColor: 'white', padding: '40px' }}
          marginLeft="20px"
        >
          {/* RIGHT Container */}
          <BookInformationInput />
        </Box>
      </Box>

      {/* Step 3, Describe quality */}
    </Box>
  );
}
