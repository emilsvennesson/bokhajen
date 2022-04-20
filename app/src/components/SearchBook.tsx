import React from 'react';
import { Autocomplete, Box, TextField, Typography } from '@mui/material';

interface SearchBookProps {
  bookSearchHandler: Function;
}

/**
 * This component fixes an autocomplete with books and fires a handler when a bbok is autocompleted
 * @param bookSearchHandler (String) => {....} Handles when a book is searched
 * @returns SearchBook component
 */
export default function SearchBook({ bookSearchHandler }: SearchBookProps) {
  const [books] = React.useState([
    { name: 'Mattematisk statistik', thing: 'hej1' },
    { name: 'Linjär algebra', thing: 'hej2' },
    { name: 'Descret mattematik', thing: 'hej2' },
    { name: 'University physics', thing: 'hej2' },
    { name: 'Maskinorienterad programmering', thing: 'hej2' },
    { name: 'Java, steg för steg', thing: 'hej2' },
    { name: 'ABOUT FACE', thing: 'hej2' },
    { name: 'Shed, a guide for life', thing: 'hej2' },
    { name: 'Mattlabb intro 200000 sidor', thing: 'hej2' },
    { name: 'Sjuka grabbar', thing: 'hej2' },
  ]);
  /**
   * Returns an array of objects that are in the autocomplete
   */
  const options = books.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  return (
    <Box
      height="100px"
      sx={{ backgroundColor: 'white' }}
      borderRadius={3}
      display="flex"
      alignItems="center"
    >
      <Typography variant="h4" marginRight={5}>
        Step 1:
      </Typography>
      <Autocomplete
        id="grouped-books"
        options={options.sort(
          (a, b) => -b.firstLetter.localeCompare(a.firstLetter),
        )}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TextField {...params} label="Write ISBN-number" />
        )}
        onInputChange={(event, newInputValue) => {
          bookSearchHandler(newInputValue);
        }}
      />
    </Box>
  );
}
