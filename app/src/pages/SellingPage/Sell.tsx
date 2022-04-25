import React from 'react';
import {
  Box,
  Stack,
  Typography,
  Button,
  Grow,
  Stepper,
  Step,
  StepLabel,
} from '@mui/material';

import { Book } from 'cremona/dist/Book';

import SearchBook from '../../components/SearchBook';
import CheckInformationCard from './CheckInformationCard';
import ConditionCheckCard from './ConditionCheckCard';
import SetPriceCard from './SetPriceCard';

const steps = [
  'Find your book',
  'Check information',
  'Specify condition',
  'Add price',
];

export default function Sell() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [book, setBook] = React.useState<Book | null>(null);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const searchForBookWindow = (
    <Box flexGrow={1}>
      <Stack
        bgcolor="white"
        alignItems="center"
        spacing={5}
        padding={2}
        paddingTop={5}
        borderRadius={2}
        height="94%"
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
          disabled={activeStep !== 0 || book === null}
        >
          {'Get started ->'}
        </Button>
      </Stack>
    </Box>
  );

  const checkInformationWindow = (
    <Box flexGrow={2}>
      <CheckInformationCard
        book={book}
        backButtonHandler={() => {
          setBook(null);
          handleBack();
        }}
        disabled={activeStep !== 1}
        continueButtonHandler={() => handleNext()}
      />
    </Box>
  );

  const conditionCheckWindow = (
    <Box flexGrow={1}>
      <ConditionCheckCard
        backButtonHandler={() => handleBack()}
        nextButtonHandler={() => handleNext()}
        disabled={activeStep === 3}
      />
    </Box>
  );

  return (
    <Box>
      <Stack padding="2%" bgcolor="#C4C4C4" direction="column" spacing={2}>
        {/** Title */}
        <Box bgcolor="white" borderRadius="8px" padding={5} flexGrow={3}>
          <Typography variant="h3" margin="30px">
            Sell your book
          </Typography>
          <Typography variant="h6" margin="20px">
            If you want to publish an add for your book there are three steps
            you need to go trough. First you need to fill out the ISBN number in
            order for us to know wich book you want to sell
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
          {searchForBookWindow}
          {/** Check information */}
          <Grow in={book != null && activeStep > 0}>
            {checkInformationWindow}
          </Grow>

          {/** Set quality */}
          <Grow in={activeStep > 1 && book != null}>
            {conditionCheckWindow}
          </Grow>
        </Stack>
      </Stack>
      <SetPriceCard
        book={book}
        backButtonHandler={() => handleBack()}
        continueButtonHandler={(price: number) => console.log(price)}
        show={activeStep === 3}
      />
    </Box>
  );
}
