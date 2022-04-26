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
            marginTop: '10%',
          }}
        >
          <Box
            sx={{
              width: '250px',
              alignSelf: 'start',
              marginTop: '10%',
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
                {book.authors.length !== 0 &&
                  `Författare: ${book.authors.join(', ')}`}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="p"
                sx={{
                  alignSelf: 'center',
                  wordWrap: 'vertical-lr',
                  width: '250px',
                }}
              >
                {/* YEAR */}
                {book.year && `Utgiven: ${book.year}`}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="p"
                sx={{
                  alignSelf: 'center',
                  wordWrap: 'vertical-lr',
                  width: '250px',
                }}
              >
                {/* ISBN */}
                {book.isbn && `ISBN: ${book.isbn}`}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="p"
                sx={{
                  alignSelf: 'center',
                  wordWrap: 'vertical-lr',
                  width: '250px',
                }}
              >
                {/* WEIGHT */}
                {book.weight && `Weight: ${book.weight} gram`}
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                component="p"
                sx={{
                  alignSelf: 'center',
                  wordWrap: 'vertical-lr',
                  width: '250px',
                }}
              >
                <br />
              </Typography>
            </Stack>
          </Box>
        </Container>
        <Container sx={{ flex: 3, marginTop: '10%' }}>
          <Typography variant="h3" gutterBottom component="div">
            {book.name}
          </Typography>
          {/* Jag skulle vilja att descriptionen här har en newline per stycke */}
          <Typography variant="h6" gutterBottom component="p" sx={{}}>
            {book.description}
            <br />
            <br />
            {book.courseCodes.length !== 0 &&
              `Kurskoder: ${book.courseCodes.join(', ')}`}
          </Typography>
        </Container>
      </Box>
    </div>
  );
}
