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
          <Box
            sx={{
              width: '250px',
              alignSelf: 'end',
            }}
          >
            <Stack>
              {/* BOOK IMAGE */}
              <Box
                component="img"
                height={300}
                width={200}
                src={book.image}
                sx={{ alignSelf: 'start' }}
              />
              <Typography
                variant="h6"
                gutterBottom
                component="p"
                sx={{
                  alignSelf: 'center',
                  marginTop: '15px',
                  wordWrap: 'vertical-lr',
                  width: '250px',
                }}
              >
                {/* AUTHORS */}
                Författare: {book.authors.join(', ')}
                <br />
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
          </Box>
        </Container>
        <Container sx={{ flex: 2, marginTop: '10%' }}>
          <Typography variant="h3" gutterBottom component="div">
            {book.name}
          </Typography>
          {/* Jag skulle vilja att descriptionen här har en newline per stycke */}
          <Typography variant="h6" gutterBottom component="p" sx={{}}>
            {book.description}
            <br />
            <br />
            Kurskoder: {book.courseCodes.join(', ')}
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
