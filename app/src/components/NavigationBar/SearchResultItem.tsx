/* eslint-disable react/require-default-props */
import {
  Box,
  Grid,
  ListItemButton,
  Stack,
  Typography,
  Tooltip,
  Skeleton,
} from '@mui/material';
import { Book } from 'cremona';
import React from 'react';

interface Props {
  book?: Book;
  onBookClick?: (book: Book) => void;
}

export default function SearchResultItem({ book, onBookClick }: Props) {
  if (!book) {
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
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Skeleton
            variant="rectangular"
            width={75 / Math.sqrt(2)}
            height={75}
          />
          <Stack sx={{ ml: 1 }} spacing={1}>
            <Skeleton variant="rectangular" width={160} height={20} />
            <Skeleton variant="rectangular" width={60} height={20} />
          </Stack>
        </Box>
        <Skeleton variant="rectangular" width={100} height={20} />
      </ListItemButton>
    );
  }
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
      onClick={() => onBookClick && onBookClick(book)}
    >
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
            <Tooltip title="Chalmer Store">
              <Typography
                variant="body1"
                style={{ fontWeight: 'bold', textDecoration: 'line-through' }}
              >
                {book.price} kr
              </Typography>
            </Tooltip>
          </Grid>
        </Grid>
      </Box>
    </ListItemButton>
  );
}
