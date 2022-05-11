import { Box, Paper, Grow } from '@mui/material';
import { Book } from 'cremona';
import React from 'react';
import CheckInformationCard from '../CheckInformationCard';

interface CheckInformationWindowProps {
  book: Book | undefined;
  handleBack: Function;
  handleNext: Function;
  setEdit: Function;
  active: boolean;
  show: boolean;
}

export default function CheckInformationWindow({
  book,
  handleBack,
  handleNext,
  setEdit,
  active,
  show,
}: CheckInformationWindowProps) {
  return (
    <Grow in={show}>
      <Box flexGrow={1.5} height="300px">
        <Paper elevation={5}>
          <CheckInformationCard
            book={book}
            backButtonHandler={() => {
              handleBack();
            }}
            disabled={!active}
            continueButtonHandler={() => handleNext()}
            editButtonHandler={() => setEdit(true)}
          />
        </Paper>
      </Box>
    </Grow>
  );
}
