import { Box, Grid, ListItemButton, Stack, Typography } from '@mui/material';
import { Book } from 'cremona';
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  book: Book;
}

export default function SearchResultItem({ book }: Props) {
  return (
    <ListItemButton
      sx={{
        display: 'flex',
        mb: 1,
        width: '100%',
        pl: 0,
        borderRadius: 2,
        justifyContent: 'space-between',
      }}
      component={Link}
      to={`/books/${book.uid}`}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        <Box
          component="img"
          src={`${book.image}?w=64&h=64&fit=crop&auto=format`}
          srcSet={`${book.image}?w=64&h=64&fit=crop&auto=format`}
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
      <Box>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', justifyContent: 'right' }}
          >
            <Typography
              variant="body1"
              style={{ fontWeight: 'bold', color: 'red' }}
            >
              666 kr
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: 'flex', justifyContent: 'right' }}
          >
            <Typography
              variant="body1"
              style={{ fontWeight: 'bold', textDecoration: 'line-through' }}
            >
              {book.price} kr
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </ListItemButton>
  );
}
