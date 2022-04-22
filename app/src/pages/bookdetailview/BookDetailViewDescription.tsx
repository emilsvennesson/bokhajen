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
            flex: 3,
            display: 'flex',
            justifyContent: 'end',
            marginTop: '15%',
          }}
        >
          <Stack>
            {/* BOOK IMAGE */}
            <Box
              component="img"
              height={300}
              width={200}
              src={book.image}
              sx={{ alignSelf: 'center' }}
            />
            <Typography
              variant="h6"
              gutterBottom
              component="div"
              sx={{ alignSelf: 'center', marginTop: '15px' }}
            >
              {/* YEAR */}
              Utgiven: {book.year}
              <br />
              {/* ISBN */}
              ISBN: {book.isbn}
              <br />
              {/* WEIGHT */}
              Vikt: {book.weight} gram
              <br />
            </Typography>
          </Stack>
        </Container>
        <Container sx={{ flex: 2, marginTop: '10%' }}>
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
