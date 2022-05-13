import React, { useEffect } from 'react';
import { Box, Button, Fade, Stack, TextField, Typography } from '@mui/material';
import { Book } from 'cremona';

interface BookInformationInputProps {
  book: Book | undefined;
  show: boolean;
  changeBookHandler: Function;
  backButtonHandler: Function;
}

/**
 * This will fade up over the screen and represent an interface for editing some of the attributes for a book
 * @param book : Book | undefied \ will be encapsulated with changed attributes
 * @param show : boolean \ Fades in when this value is true
 * @param changeBookHandler : Function \ Sets the new changed book when it is edited
 * @param backButtonHandler : Function \ Called when the back button is pressed
 * @returns BookInformationInput component
 */
export default function BookInformationInput({
  book,
  show,
  changeBookHandler,
  backButtonHandler,
}: BookInformationInputProps) {
  const [name, setName] = React.useState<string | undefined>(book?.name ?? '');
  const [year, setYear] = React.useState<number | undefined>(book?.year ?? 0);
  const [isbn, setIsbn] = React.useState<number | undefined>(book?.isbn ?? 0);

  useEffect(() => {
    setName(book?.name ?? '');
    setYear(book?.year ?? 0);
    setIsbn(book?.isbn ?? 0);
  }, [book]);
  /**
   * This will encapsulate a new book if continue is pressed and some changes have been made
   */
  const handleContinue = () => {
    if (name?.trim() === '') setName(undefined);
    if (year === 0) setYear(undefined);
    if (isbn === 0) setIsbn(undefined);
    const newBook: Book = {
      name: name ?? book?.name ?? '',
      uid: book?.uid ?? 0,
      articleNumber: book?.articleNumber ?? 0,
      description: book?.description ?? '',
      price: book?.price ?? 0,
      url: book?.url ?? [],
      image: book?.image ?? '',
      courseCodes: book?.courseCodes ?? [],
      authors: book?.authors ?? [],
      isbn: isbn ?? book?.isbn ?? 0,
      weight: book?.weight ?? 0,
      year: year ?? book?.year ?? 0,
    };

    changeBookHandler(newBook);
  };

  /**
   * Handles when the name is changed inside a text field, this is also used for error handling and preventing bad formatting from the user
   * @param event this contains the value
   */
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;

    setName(value);
  };
  /**
   * Handles when the year is changed inside a text field, this is also used for error handling and preventing bad formatting from the user
   * @param event this contains the value
   */
  const handleYearChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;

    setYear(Number(+value));
  };

  /**
   * Handles when the Isbn is changed inside a text field, this is also used for error handling and preventing bad formatting from the user
   * @param event this contains the value
   */
  const handleIsbnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;

    if (value.length !== 13) return;

    setIsbn(Number(value));
  };

  const handleReset = () => {
    setName(book?.name ?? '');
    setYear(book?.year ?? 0);
    setIsbn(book?.isbn ?? 0);
  };

  return (
    <Fade in={show}>
      <Box
        position="fixed"
        left={0}
        top={0}
        display="flex"
        flexDirection="column"
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          position="fixed"
          width="100%"
          height="100%"
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
          alignItems="center"
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
            width={400}
          >
            <Typography variant="h3">Book Information</Typography>
            <Box component="img" src={book?.image ?? ''} width="200px" />
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              value={name}
              onChange={handleNameChange}
              fullWidth
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
              type="number"
              defaultValue={book?.isbn}
              value={isbn}
              disabled
              onChange={handleIsbnChange}
            />

            <Stack
              width="100%"
              justifyContent="center"
              direction="row"
              spacing={1}
            >
              <Button onClick={handleReset} variant="contained">
                Reset
              </Button>
              <Button onClick={handleContinue} variant="contained">
                Save
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Fade>
  );
}
