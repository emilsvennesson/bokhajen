import { Box, Button, Grid, Stack, Typography } from '@mui/material';
import { Book } from 'cremona';

interface Props {
  book: Book;
}

export default function BookDetailViewDescription({ book }: Props) {
  const bookInfo = [];

  if (book.authors && book.authors.length > 0)
    bookInfo.push({ title: 'Författare', value: book.authors.join(', ') });
  if (book.year) bookInfo.push({ title: 'Utgiven', value: book.year });
  if (book.isbn) bookInfo.push({ title: 'ISBN', value: book.isbn });
  if (book.weight) bookInfo.push({ title: 'Vikt', value: book.weight });
  if (book.courseCodes && book.courseCodes.length > 0)
    bookInfo.push({ title: 'Kurskoder', value: book.courseCodes.join(', ') });
  console.log('desc', book.description);
  return (
    <Grid container>
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <Box
            sx={{
              width: '250px',
              alignSelf: 'start',
            }}
          >
            <Stack spacing={1}>
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
              <Stack spacing={1}>
                {bookInfo.map((info) => (
                  <Typography sx={{ fontWeight: 'bold' }}>
                    {info.title}:{' '}
                    <Typography sx={{ display: 'inline' }}>
                      {info.value}
                    </Typography>
                  </Typography>
                ))}
              </Stack>

              <Button
                variant="contained"
                sx={{ width: '200px', marginTop: '15px' }}
              >
                Sälj denna boken
              </Button>
            </Stack>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom>
          {book && book.name}
        </Typography>
        {/* Jag skulle vilja att descriptionen här har en newline per stycke */}
        <Typography variant="body1">{book && book.description}</Typography>
      </Grid>
    </Grid>
  );
}
