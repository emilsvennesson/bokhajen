import { Box, Button, Stack, Typography, useMediaQuery } from '@mui/material';
import { Book } from 'cremona';
import { Link } from 'react-router-dom';

interface Props {
  book: Book;
}

export default function BookDetailViewDescription({ book }: Props) {
  const bookInfo = [];
  const sm = useMediaQuery('(min-width:600px)');

  bookInfo.push({ title: 'Ordinarie pris', value: `${book.price} kr` });
  if (book.edition) bookInfo.push({ title: 'Upplaga', value: book.edition });
  if (book.authors && book.authors.length > 0)
    bookInfo.push({ title: 'Författare', value: book.authors.join(', ') });
  if (book.year) bookInfo.push({ title: 'Utgiven', value: book.year });
  if (book.isbn) bookInfo.push({ title: 'ISBN', value: book.isbn });
  if (book.weight) bookInfo.push({ title: 'Vikt', value: `${book.weight} g` });
  if (book.courseCodes && book.courseCodes.length > 0)
    bookInfo.push({ title: 'Kurskod(er)', value: book.courseCodes.join(', ') });
  return (
    <Stack direction={sm ? 'row' : 'column'} sx={{ marginRight: '25px' }}>
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
                <Typography sx={{ fontWeight: 'bold' }} key={info.title}>
                  {info.title}:{' '}
                  <Typography sx={{ display: 'inline' }}>
                    {info.value}
                  </Typography>
                </Typography>
              ))}
            </Stack>

            <Button
              component={Link}
              to={`/sell/${book.uid}`}
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
