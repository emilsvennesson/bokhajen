import { Box, Stack, Typography } from '@mui/material';
import { Book } from 'cremona';
import React from 'react';

interface Props {
  book: Book;
}

export default function BasicBookInformation({ book }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box
        component="img"
        src={book.image}
        srcSet={book.image}
        alt={book.name}
        sx={{ height: '75px' }}
      />
      <Stack sx={{ ml: 1 }}>
        <Typography variant="body1">{book.name}</Typography>
        {book.edition && (
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            Upplaga {book.edition}
          </Typography>
        )}

        <Typography variant="body2">{book.authors?.join(', ')}</Typography>
      </Stack>
    </Box>
  );
}
