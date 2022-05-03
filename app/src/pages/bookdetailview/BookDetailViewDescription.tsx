import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Book } from 'cremona/dist/Book';

interface Props {
  newBook: Book;
}

export default function BookDetailViewDescription({ newBook }: Props) {
  const book: Book = newBook;
  return (
    <Grid
      container
      sx={{
        marginTop: '50px',
      }}
    >
      <Grid item xs={12} md={6}>
        <Container
          sx={{
            flex: 3,
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <Box
            sx={{
              width: '250px',
              alignSelf: 'start',
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
                variant="subtitle1"
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
                {book.authors !== undefined &&
                  book.authors.length !== 0 &&
                  `Författare: ${book.authors.join(', ')}`}
              </Typography>
              <Typography
                variant="subtitle1"
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
                variant="subtitle1"
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
                variant="subtitle1"
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
              <Button
                variant="contained"
                sx={{ width: '200px', marginTop: '15px' }}
              >
                Sälj denna boken
              </Button>
            </Stack>
          </Box>
        </Container>
      </Grid>

      <Grid item xs={12} md={6}>
        <Container sx={{ flex: 3 }}>
          <Typography variant="h4" gutterBottom component="div">
            {book.name}
          </Typography>
          {/* Jag skulle vilja att descriptionen här har en newline per stycke */}
          <Typography variant="body1" gutterBottom component="p" sx={{}}>
            {book.description}
            <br />
            <br />
            {book.courseCodes !== undefined &&
              book.courseCodes.length !== 0 &&
              `Kurskoder: ${book.courseCodes.join(', ')}`}
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
}
