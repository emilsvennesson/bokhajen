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
  Snackbar,
  Alert,
} from '@mui/material';

import { Book } from 'cremona/dist/Book';
import { useNavigate } from 'react-router-dom';
import SearchBook from '../../components/SearchBook';
import CheckInformationCard from './CheckInformationCard';
import ConditionCheckCard from './ConditionCheckCard';
import SetPriceCard from './SetPriceCard';
import BookInformationInput from './BookInformationInput';
import Conditions from '../../config/Conditions';
import AdService from '../../services/AdService';
import Advert from '../../services/Advert';
import { useAuth } from '../../hooks/FBAuthProvider';

const steps = [
  'Find your book',
  'Check information',
  'Specify condition',
  'Add price',
];

interface Error {
  open: boolean;
  message?: string;
}

/**
 *
 * @returns
 */
export default function SellingPage() {
  const [book, setBook] = React.useState<Book | undefined>(undefined);
  const [edit, setEdit] = React.useState(false);
  const [bookPrice, setPrice] = React.useState<number | undefined>(undefined);
  const [bookCondition, setCondition] = React.useState(Conditions.good);
  const [describtion, setdescribtion] = React.useState('');
  const [error, setError] = React.useState<Error>({
    open: false,
    message: '',
  });

  const [activeStep, setActiveStep] = React.useState<number>(0);

  const { user } = useAuth();
  const navigate = useNavigate();

  /**
   * This is called to back the stepper in the page
   */
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  /**
   * This is called to next the stepper in the page
   */
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const closeError = () => {
    setError({ open: false, message: undefined });
  };

  const displayError = (eMessage?: string) => {
    setError({ open: true, message: eMessage });
  };

  /**
   * This will be called when the user is completely done with this page
   * @param price the price that the user has set
   */
  const handleDone = () => {
    if (!user || !book) return;
    if (!bookPrice) {
      displayError('Price is not set');
      return;
    }

    const ad: Advert = {
      userId: user.uid,
      bookId: book.uid.toString(),
      price: bookPrice,
      condition: bookCondition,
      conditionDescription: describtion,
    };

    if (user) {
      navigate('/', { replace: true });
    }

    AdService.publishAd(ad)
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch((res) => {
        displayError(`Error:${res.data.error}`);
      });
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
          disabled={activeStep !== 0 || book === undefined}
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
          handleBack();
        }}
        disabled={activeStep !== 1 || edit}
        continueButtonHandler={() => handleNext()}
        editButtonHandler={() => setEdit(true)}
      />
    </Box>
  );

  const conditionCheckWindow = (
    <Box flexGrow={1}>
      <ConditionCheckCard
        backButtonHandler={() => handleBack()}
        nextButtonHandler={(incondition: string, inDescribtion: string) => {
          handleNext();
          setCondition(incondition);
          setdescribtion(inDescribtion);
        }}
        disabled={activeStep === 3}
      />
    </Box>
  );

  return (
    <Box>
      <Snackbar open={error.open} autoHideDuration={6000} onClose={closeError}>
        <Alert severity="error" onClose={closeError}>
          {' '}
          {error.message ?? 'Book did not get published'}
        </Alert>
      </Snackbar>
      <Stack
        padding="2%"
        paddingTop={1}
        bgcolor="#C4C4C4"
        direction="column"
        spacing={2}
      >
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
        setPrice={(inPrice: number) => setPrice(inPrice)}
        continueButtonHandler={() => {
          handleDone();
        }}
        show={activeStep === 3}
      />
      <BookInformationInput
        book={book}
        show={edit}
        changeBookHandler={(inBook: Book) => {
          setBook(inBook);
          setEdit(false);
        }}
        backButtonHandler={() => setEdit(false)}
      />
    </Box>
  );
}
