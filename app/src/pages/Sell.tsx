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
import BookInformation from '../components/BookInformation';

const startedWindow = (
  <Stack bgcolor="white" direction="column" alignItems="center" width="400px">
    <Typography variant="h5">Condition</Typography>
    <FormControlLabel label="Torn" control={<Checkbox />} />
    <FormControlLabel label="Good" control={<Checkbox />} />
    <FormControlLabel label="Mint" control={<Checkbox />} />
    <TextField label="describe the quality" />
  </Stack>
);

const steps = ['Find your book', 'Check information', 'Specify condition'];
/**
 * Selling page, in this window the user is able to upload a book to the selling page
 * @returns Sell page
 */
export default function Sell() {
  const [started, setStarted] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  /* 
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }; */

  const checkInformationWindow = (
    <Box
      bgcolor="white"
      borderRadius={2}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Typography variant="h5" fontWeight="bold">
        Is this information correct
      </Typography>
      <BookInformation
        name="Mattematisk statistik"
        edition="4th"
        year="1992"
        ISBN="11111222223333"
        course="Mattematisk statistik och descret mattematik"
      />
      <Stack direction="row" spacing={2}>
        <Button disabled={checked} variant="contained" size="large">
          Redigera
        </Button>
        <Button
          disabled={checked}
          variant="contained"
          size="large"
          onClick={() => {
            setChecked(true);
            handleNext();
          }}
        >
          Continue
        </Button>
      </Stack>
    </Box>
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
      {/** Wizard */}
      <Stack direction="row" width="100%" spacing={2}>
        {/** Search ISBN */}
        <Stack
          flexGrow={4}
          bgcolor="white"
          alignItems="center"
          spacing={5}
          paddingTop={5}
          borderRadius={2}
        >
          <Typography variant="h2">Get started</Typography>
          <TextField disabled={started} label="ISBN-number" />
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              setStarted(true);
              handleNext();
            }}
            disabled={started}
          >
            {'Get started ->'}
          </Button>
        </Stack>

        {/** Check information */}
        <Grow in={started}>{checkInformationWindow}</Grow>

        {/** Set quality */}
        <Grow in={checked}>{startedWindow}</Grow>
      </Stack>
    </Stack>
  );
}
