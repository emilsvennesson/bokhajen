import { Box, Stack, Button, Typography } from '@mui/material';
import { Book } from 'cremona/dist/Book';
import React from 'react';
import BookInformation from './BookInformation';

interface CheckInformationCardProps {
  book: Book | null;
  backButtonHandler: Function;
  continueButtonHandler: Function;
  disabled: boolean;
}

const EmptyBook: Book = {
  name: 'book',
  uid: 0,
  articleNumber: '',
  description: null,
  price: 0,
  url: [''],
  image: '',
  courseCodes: [''],
  authors: [''],
  isbn: null,
  weight: 0,
  year: null,
};

export default function CheckInformationCard({
  book,
  backButtonHandler,
  disabled,
  continueButtonHandler,
}: CheckInformationCardProps) {
  return (
    <Box
      bgcolor="white"
      borderRadius={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
      flexGrow={2}
      height="100%"
    >
      <Stack direction="row" alignItems="left" width="100%">
        <Button
          variant="contained"
          disabled={disabled}
          onClick={() => {
            backButtonHandler();
          }}
        >
          {'<-'}
        </Button>
        <Typography
          textAlign="center"
          variant="h5"
          fontWeight="bold"
          flexGrow={5}
        >
          Is this information correct
        </Typography>
      </Stack>
      <BookInformation book={book || EmptyBook} />
      <Stack direction="row" spacing={2}>
        <Button disabled={disabled} variant="contained" size="large">
          Redigera
        </Button>
        <Button
          disabled={disabled}
          variant="contained"
          size="large"
          onClick={() => {
            continueButtonHandler();
          }}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  );
}
