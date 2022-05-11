import { Box, Stack, Button, Typography } from '@mui/material';
import { Book } from 'cremona/dist/Book';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import React from 'react';
import BookInformation from './BookInformation';

interface CheckInformationCardProps {
  book: Book | undefined;
  backButtonHandler: Function;
  continueButtonHandler: Function;
  editButtonHandler: Function;
  disabled: boolean;
}

/**
 * This is a card used in the SellBookPage that shows all relevant information of a book inside a card
 * @param book : book | undefined \ The information that will be shown will be gotten from this book
 * @param backButtonHandler : Function \ This will execute when the back button is pressed
 * @param continueButtonHandler : Function \ This will execute when the continue button is pressed
 * @param editButtonHandler : Function \ This will excecute when the dit button is pressed
 * @param disabled : boolean \ When this istrue all the buttons will be disabled
 * @returns CheckInformationCard component
 */
export default function CheckInformationCard({
  book,
  backButtonHandler,
  disabled,
  continueButtonHandler,
  editButtonHandler,
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
      height="360px"
    >
      <Stack direction="row" alignItems="left" width="100%">
        <Button
          variant="contained"
          disabled={disabled}
          onClick={() => {
            backButtonHandler();
          }}
        >
          <KeyboardBackspaceOutlinedIcon />
        </Button>
        <Typography textAlign="center" variant="h5" flexGrow={5}>
          Är informationen korrekt?
        </Typography>
      </Stack>
      <BookInformation book={book} />
      <Stack direction="row" spacing={2}>
        <Button
          disabled={disabled}
          variant="contained"
          size="large"
          onClick={() => editButtonHandler()}
        >
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
          Fortsätt
        </Button>
      </Stack>
    </Box>
  );
}
