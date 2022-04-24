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
  Fade,
  Card,
} from '@mui/material';

import { Book } from 'cremona/dist/Book';

import SearchBook from '../components/SearchBook';
import CheckInformationCard from '../components/CheckInformationCard';

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

  const checkInformationWindow = (
    <Box>
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
      <Button
        variant="contained"
        size="large"
        onClick={() => handleNext()}
        disabled={activeStep === 3}
      >
        Continue
      </Button>
    </Stack>
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
          <Stack
            bgcolor="white"
            alignItems="center"
            spacing={5}
            padding={2}
            paddingTop={5}
            borderRadius={2}
            width="370px"
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
              disabled={activeStep !== 0 || book == null}
            >
              {'Get started ->'}
            </Button>
          </Stack>

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
      <Fade in={activeStep > 2 && book != null}>
        <Stack
          position="absolute"
          width="100vw"
          height="100vh"
          top="0"
          left="0"
          zIndex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgcolor="transparent"
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
          <Grow in={activeStep > 2 && book != null}>
            <Stack
              width="600px"
              height="700px"
              bgcolor="white"
              zIndex={1}
              borderRadius={2}
              alignItems="center"
              direction="column"
              padding="10px"
              spacing="40px"
            >
              <Box width="100%">
                <Button onClick={() => handleBack()} variant="contained">
                  {'<-'}
                </Button>
              </Box>
              <Typography variant="h3">Set a price</Typography>
              <TextField label="price" />

              <Button variant="contained" size="large">
                Continue
              </Button>

              <Card>
                <Stack
                  direction="row"
                  alignItems="center"
                  spacing="20px"
                  padding={2}
                >
                  <Box
                    component="img"
                    width="90px"
                    src="https://shop.textalk.se/shop/22777/files/Logotyper/Logga%20vit%20botten.png?max-width=600&max-height=120&quality=85"
                  />
                  <Typography variant="h5" fontWeight="bold">
                    Chalmers Store
                  </Typography>
                  <Box display="flex">
                    <Typography variant="h5">{book?.price}</Typography>
                    <Typography variant="h5">:-</Typography>
                  </Box>
                </Stack>
              </Card>
            </Stack>
          </Grow>
        </Stack>
      </Fade>
    </Box>
  );
}
