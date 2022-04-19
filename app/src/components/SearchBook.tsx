import React from 'react';
import { Autocomplete, Box, TextField } from '@mui/material';

const books = [
  { name: 'Mattematisk statistik', thing: 'hej1' },
  { name: 'Linjär algebra', thing: 'hej2' },
];

interface SearchBookProps {
  bookSearchHandler: Function;
}

export default function SearchBook({ bookSearchHandler }: SearchBookProps) {
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
      justifyContent="center"
      alignItems="center"
    >
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
          <TextField {...params} label="Book" />
        )}
        onInputChange={(event, newInputValue) => {
          bookSearchHandler(newInputValue);
        }}
      />
    </Box>
  );
}
