import { Grid, Box } from '@mui/material';
import { Book } from 'cremona/dist/Book';
import BookDetailViewAds from './BookDetailViewAds';
import BookDetailViewDescription from './BookDetailViewDescription';

interface Props {
  newBook: Book;
}

export default function BookDetailView({ newBook }: Props) {
  const book: Book = newBook;
  return (
    <Box
      sx={{
        display: 'flex',
        width: '98vw',
      }}
    >
      <Grid container>
        <Grid item xs={12} md={7}>
          <BookDetailViewDescription newBook={book} />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          sx={{ boxShadow: '-8px 0 5px rgba(0,0,0,0.1)' }}
        >
          <BookDetailViewAds />
        </Grid>
      </Grid>
    </Box>
  );
}
