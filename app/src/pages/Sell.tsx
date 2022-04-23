import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Button,
  Grow,
  TextField,
  Checkbox,
  FormControlLabel,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';

import { Book } from 'cremona/dist/Book';
import BookInformation from '../components/BookInformation';
import SearchBook from '../components/SearchBook';

const steps = ['Find your book', 'Check information', 'Specify condition'];
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

export default function Sell() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [book, setBook] = React.useState<Book | null>(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const checkInformationWindow = (
    <Box
      bgcolor="white"
      borderRadius={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
      padding={2}
      flexGrow={2}
    >
      <Stack direction="row" alignItems="left" width="100%">
        <Button
          variant="contained"
          disabled={activeStep !== 1}
          onClick={() => handleBack()}
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
        <Button disabled={activeStep !== 1} variant="contained" size="large">
          Redigera
        </Button>
        <Button
          disabled={activeStep !== 1}
          variant="contained"
          size="large"
          onClick={() => {
            handleNext();
          }}
        >
          Continue
        </Button>
      </Stack>
    </Box>
  );

  const startedWindow = (
    <Stack
      bgcolor="white"
      direction="column"
      alignItems="center"
      width="400px"
      padding={2}
      borderRadius={2}
      spacing={2}
      flexGrow={1}
    >
      <Stack direction="row" width="100%" alignContent="left">
        <Button
          variant="contained"
          disabled={activeStep !== 2}
          onClick={() => handleBack()}
        >
          {'<-'}
        </Button>
        <Typography textAlign="center" variant="h5" flexGrow={2}>
          Condition
        </Typography>
        <Box flexGrow={1} />
      </Stack>

      <FormControlLabel label="Torn" control={<Checkbox />} />
      <FormControlLabel label="Good" control={<Checkbox />} />
      <FormControlLabel label="Mint" control={<Checkbox />} />
      <TextField label="describe the quality" />
      <Button variant="contained" size="large" onClick={() => handleNext()}>
        Finish
      </Button>
    </Stack>
  );

  return (
    <Stack padding="2%" bgcolor="#C4C4C4" direction="column" spacing={2}>
      {/** Title */}
      <Box bgcolor="white" borderRadius="8px" padding={5} flexGrow={3}>
        <Typography variant="h3" margin="30px">
          Sell your book
        </Typography>
        <Typography variant="h6" margin="20px">
          If you want to publish an add for your book there are three steps you
          need to go trough. First you need to fill out the ISBN number in order
          for us to know wich book you want to sell
        </Typography>
      </Box>
      <Box bgcolor="white" padding={2} borderRadius={2}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => {
            const stepProps: { completed?: boolean } = {};
            return (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <Step key={label} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
      {/** Wizard */}
      <Stack direction="row" width="100%" spacing={1}>
        {/** Search ISBN */}
        <Stack
          flexGrow={1}
          bgcolor="white"
          alignItems="center"
          spacing={5}
          padding={2}
          paddingTop={5}
          borderRadius={2}
        >
          <Typography textAlign="center" variant="h2">
            Get started
          </Typography>
          <SearchBook
            disabled={activeStep > 0}
            bookSearchHandler={(inBook: Book) => setBook(inBook)}
          />
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              handleNext();
            }}
            disabled={activeStep !== 0}
          >
            {'Get started ->'}
          </Button>
        </Stack>

        {/** Check information */}
        <Grow in={book != null && activeStep > 0}>
          {checkInformationWindow}
        </Grow>

        {/** Set quality */}
        <Grow in={activeStep > 1 && book != null}>{startedWindow}</Grow>
      </Stack>
    </Stack>
  );
}
