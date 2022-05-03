import { Container, Grid, Stack, Typography } from '@mui/material';
import { Book } from 'cremona';
import BookCard from './BookCard';

interface GridProps {
  title: string;
  books: Book[];
}

export default function CategoriesGrid({ title, books }: GridProps) {
  return (
    <Container maxWidth="lg">
      <Stack spacing={1} sx={{ p: 2 }}>
        <Typography
          style={{ fontWeight: 'bold', marginLeft: '12px' }}
          variant="h4"
        >
          {title}
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          {books.length === 0 &&
            [...Array(6)].map((e, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <Grid item md={2} zeroMinWidth key={i}>
                <BookCard />
              </Grid>
            ))}
          {books.map((book: Book) => (
            <Grid item md={2} zeroMinWidth key={book.uid}>
              <BookCard book={book} />
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  );
}
