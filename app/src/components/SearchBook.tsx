import React from 'react';
import { Box, Typography } from '@mui/material';
import { Book } from 'cremona/dist/Book';
import CremonaClient from 'cremona';

/**
 * This component fixes an autocomplete with books and fires a handler when a bbok is autocompleted
 * @param bookSearchHandler (String) => {....} Handles when a book is searched
 * @returns SearchBook component
 */
export default function SearchBook() {
  const [open] = React.useState(false);
  const [options, setOptions] = React.useState<readonly Book[]>([]);
  const loading = open && options.length === 0;

  React.useEffect(() => {
    let active = true;

    if (!loading) {
      return undefined;
    }

    (async () => {
      const client = new CremonaClient();
      const ding = await client.getBooks();

      if (active) {
        setOptions([...ding]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading]);

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
      {/* <Autocomplete
        id="grouped-books"
        options={
          const copy = [...options];
          copy.sort(
          (a, b) => -b.name.firstLetter.localeCompare(a.name.firstLetter),
        )}
        isOptionEqualToValue={(option, value) => option.name === value.name}
        getOptionLabel={(option) => option.name}
        options={options}
        loading={loading}
        groupBy={(option) => option.name.firstLetter}
        getOptionLabel={(option) => option.name}
        sx={{ width: 300 }}
        renderInput={(params) => (
          // eslint-disable-next-line react/jsx-props-no-spreading
          <TextField {...params} label="Write ISBN-number" InputProps={{}} />
        )}
        onInputChange={(event, newInputValue) => {
          bookSearchHandler(newInputValue);
        }}
      /> */}
    </Box>
  );
}
