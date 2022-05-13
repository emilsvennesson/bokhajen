import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { Book } from 'cremona';

interface Props {
  book: Book;
}

export default function BookDetailViewDescription({ book }: Props) {
  const bookInfo = [];
  const sm = useMediaQuery('(min-width:600px)');

  if (book.authors && book.authors.length > 0)
    bookInfo.push({ title: 'Författare', value: book.authors.join(', ') });
  if (book.year) bookInfo.push({ title: 'Utgiven', value: book.year });
  if (book.isbn) bookInfo.push({ title: 'ISBN', value: book.isbn });
  if (book.weight) bookInfo.push({ title: 'Vikt', value: book.weight });
  if (book.courseCodes && book.courseCodes.length > 0)
    bookInfo.push({ title: 'Kurskoder', value: book.courseCodes.join(', ') });
  return (
    <Stack direction={sm ? 'row' : 'column'}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            width: '250px',
            justifyContent: 'center',
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

      <Stack sx={{ maxWidth: sm ? '70%' : '100%' }}>
        <Typography variant="h4" gutterBottom>
          {book && book.name}
        </Typography>
        {/* Jag skulle vilja att descriptionen här har en newline per stycke */}
        <Typography variant="body1">{book && book.description}</Typography>
      </Stack>
    </Stack>
  );
}
