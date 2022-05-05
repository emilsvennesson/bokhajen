import { Box, Paper, Grow } from '@mui/material';
import { Book } from 'cremona';
import React from 'react';
import CheckInformationCard from '../CheckInformationCard';

interface CheckInformationWIndowProps {
  book: Book | undefined;
  handleBack: Function;
  handleNext: Function;
  setEdit: Function;
  show: boolean;
}

export default function CheckInformationWIndow({
  book,
  handleBack,
  handleNext,
  setEdit,
  show,
}: CheckInformationWIndowProps) {
  return (
    <Grow in={show}>
      <Box flexGrow={1.5} height="300px">
        <Paper elevation={5}>
          <CheckInformationCard
            book={book}
            backButtonHandler={() => {
              handleBack();
            }}
            disabled={!show}
            continueButtonHandler={() => handleNext()}
            editButtonHandler={() => setEdit(true)}
          />
        </Paper>
      </Box>
    </Grow>
  );
}
