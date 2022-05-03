import React from 'react';
import { Autocomplete, CircularProgress, TextField } from '@mui/material';

import { Book, CremonaClient } from 'cremona';

interface SearchBookProps {
  bookSearchHandler: Function;
  disabled: boolean | undefined;
}

/**
 * This component fixes an autocomplete with books and fires a handler when a bbok is autocompleted
 * @param bookSearchHandler (String) => {....} Handles when a book is searched
 * @returns SearchBook component
 */
export default function SearchBook({
  bookSearchHandler,
  disabled,
}: SearchBookProps) {
  const [open, setOpen] = React.useState(false);
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
    <Autocomplete
      disableClearable
      id="grouped-books"
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      disabled={disabled}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) =>
        option.name === value.name || option.isbn === value.isbn
      }
      getOptionLabel={(option) => option.name}
      options={options}
      loading={loading}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...params}
          label="Write ISBN-number"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}{' '}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      onChange={(event, newInputValue) => {
        bookSearchHandler(newInputValue);
      }}
    />
  );
}
