import { Grid, Stack, Typography } from '@mui/material';
import { Book } from 'cremona';
import BookCard from './BookCard';

interface GridProps {
  title: string;
  books: Book[];
}

export default function CategoriesGrid({ title, books }: GridProps) {
  return (
    <Stack spacing={1} sx={{ p: 2 }}>
      <Typography variant="h4">{title}</Typography>
      <Grid container spacing={1} justifyContent="center" alignItems="center">
        {books.map((book: Book) => (
          <Grid item md={2} zeroMinWidth key={book.uid}>
            <BookCard book={book} />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
}
