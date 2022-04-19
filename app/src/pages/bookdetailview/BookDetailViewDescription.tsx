import { Box, Container, Stack, Typography } from '@mui/material';
import { Book } from 'cremona/dist/Book';

interface Props {
  newBook: Book;
}

export default function BookDetailViewDescription({ newBook }: Props) {
  const book: Book = newBook;
  return (
    <div>
      <Box sx={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
        <Container
          sx={{
            flex: 2,
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10%',
          }}
        >
          {/* BOOK IMAGE */}
          <Stack>
            <Box component="img" height={300} src={book.image} sx={{}} />
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ alignSelf: 'center', marginTop: '15px' }}
            >
              {book.year}
            </Typography>
          </Stack>
        </Container>
        <Container sx={{ flex: 3, marginTop: '10%' }}>
          <Typography variant="h3" gutterBottom component="div">
            {book.name}
          </Typography>
          <Typography variant="h6" gutterBottom component="div">
            {book.description}
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
