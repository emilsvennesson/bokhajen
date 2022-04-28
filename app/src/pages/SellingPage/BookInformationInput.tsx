import React from 'react';
import { Box, Button, Fade, Stack, TextField, Typography } from '@mui/material';
import { Book } from 'cremona/dist/Book';

interface BookInformationInputProps {
  book: Book | null;
  show: boolean;
  backButtonHandler: Function;
}

export default function BookInformationInput({
  book,
  show,
  backButtonHandler,
}: BookInformationInputProps) {
  const [name, setName] = React.useState<string | null>(null);
  const [year, setYear] = React.useState<string | null>(null);
  const [isbn, setIsbn] = React.useState<string | null>(null);

  const handleContinue = () => {
    if (name?.trim() === '') setName(null);
    if (year?.trim() === '') setYear(null);
    if (isbn?.trim() === '') setIsbn(null);
    const newBook: Book = {
      name: name ?? book?.name ?? '',
      uid: book?.uid ?? 0,
      articleNumber: book?.articleNumber ?? '',
      description: book?.description ?? '',
      price: book?.price ?? 0,
      url: book?.url ?? [],
      image: book?.image ?? '',
      courseCodes: book?.courseCodes ?? [],
      authors: book?.authors ?? [],
      isbn: book?.isbn ?? 0,
      weight: book?.weight ?? 0,
      year: book?.year ?? 0,
    };

    console.log(newBook);
  };

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;

    setName(value);
  };
  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;

    setYear(value);
  };
  const handleIsbnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;

    setIsbn(value);
  };

  return (
    <Fade in={show}>
      <Box
        position="absolute"
        left={0}
        top={0}
        display="flex"
        flexDirection="column"
        width="100vw"
        height="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          position="absolute"
          width="100vw"
          height="100vh"
          left={0}
          top={0}
          bgcolor="lightgray"
          zIndex={0.5}
          sx={{ opacity: 0.6 }}
        />
        <Stack
          width="500px"
          height="90vh"
          bgcolor="white"
          padding="30px"
          borderRadius={2}
          zIndex={1}
        >
          <Box width="100%">
            <Button onClick={() => backButtonHandler()} variant="contained">
              {'<-'}
            </Button>
          </Box>

          <Stack
            direction="column"
            spacing={4}
            alignItems="center"
            justifyContent="center"
          >
            <Typography variant="h3">Book Information</Typography>
            <Box component="img" src={book?.image ?? ''} width="200px" />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              id="outlined-basic"
              label="Year"
              variant="outlined"
              type="number"
              value={year}
              onChange={handleYearChange}
            />
            <TextField
              id="outlined-basic"
              label="ISBN-Number"
              variant="outlined"
              value={isbn}
              onChange={handleIsbnChange}
            />
            <TextField id="outlined-basic" label="Authors" variant="outlined" />
            <Box width="100%" display="flex" justifyContent="center">
              <Button onClick={handleContinue} variant="contained">
                Continue
              </Button>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Fade>
  );
}

BookInformationInput.defaultProps = {};
