import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { Book } from 'cremona';

interface Props {
  book?: Book;
}

export default function BookDetailViewDescription({ book }: Props) {
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
              {book && (
                <Box
                  component="img"
                  height={300}
                  width={200}
                  src={book.image}
                  sx={{ alignSelf: 'start' }}
                />
              )}

              <Typography
                variant="subtitle1"
                gutterBottom
                component="p"
                sx={{
                  alignSelf: 'start',
                  marginTop: '15px',
                  wordWrap: 'vertical-lr',
                  width: '200px',
                }}
              >
                {/* AUTHORS */}
                {book &&
                  book.authors &&
                  `Författare: ${book.authors.join(', ')}`}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="p"
                sx={{
                  alignSelf: 'start',
                  wordWrap: 'vertical-lr',
                  width: '200px',
                }}
              >
                {/* YEAR */}
                {book && book.year && `Utgiven: ${book.year}`}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="p"
                sx={{
                  alignSelf: 'start',
                  wordWrap: 'vertical-lr',
                  width: '200px',
                }}
              >
                {/* ISBN */}
                {book && book.isbn && `ISBN: ${book.isbn}`}
              </Typography>
              <Typography
                variant="subtitle1"
                gutterBottom
                component="p"
                sx={{
                  alignSelf: 'start',
                  wordWrap: 'vertical-lr',
                  width: '200px',
                }}
              >
                {/* WEIGHT */}
                {book && book.weight && `Vikt: ${book.weight} gram`}
              </Typography>
              <Typography>
                {book &&
                  book.courseCodes &&
                  `Kurskoder: ${book.courseCodes.join(', ')}`}
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
            {book && book.name}
          </Typography>
          {/* Jag skulle vilja att descriptionen här har en newline per stycke */}
          <Typography variant="body1" gutterBottom component="p" sx={{}}>
            {book && book.description}
          </Typography>
        </Container>
      </Grid>
    </Grid>
  );
}
