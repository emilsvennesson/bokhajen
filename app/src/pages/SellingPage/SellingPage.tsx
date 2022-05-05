import React, { useEffect } from 'react';
import {
  Box,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Snackbar,
  Alert,
} from '@mui/material';

import { Book } from 'cremona/dist/Book';
import { useNavigate } from 'react-router-dom';

import BookInformationInput from './BookInformationInput';
import Conditions from '../../config/Conditions';
import AdService from '../../services/AdService';
import { NewAdvert } from '../../services/Advert';
import { useAuth } from '../../hooks/FBAuthProvider';
import OverlayCircularProgress from '../../components/OverlayCircularProgress';
import SearchForBookWindowCard from './Wizard/SearchForBookWindowCard';
import CheckInformationWIndow from './Wizard/CheckInformationWIndow';
import ConditionCheckWindow from './Wizard/ConditionCheckWindow';
import SetPriceWindow from './Wizard/SetPriceWindow';

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

  const { user, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        navigate('/login', { replace: true });
      }
    }
  });

  if (loading) {
    return <OverlayCircularProgress />;
  }

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
    if (bookPrice === undefined) {
      displayError('Price is not set');
      return;
    }

    const ad: NewAdvert = {
      userId: user.uid,
      bookId: book.uid.toString(),
      price: bookPrice,
      condition: bookCondition,
      conditionDescription: describtion,
    };

    AdService.publishAd(ad)
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch((res) => {
        displayError(`Error:${res.data.error}`);
      });
  };

  return (
    <Box height="500px">
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={error.open}
        autoHideDuration={6000}
        onClose={closeError}
      >
        <Alert severity="error" onClose={closeError}>
          {' '}
          {error.message ?? 'Book did not get published'}
        </Alert>
      </Snackbar>
      <Stack
        padding="2%"
        paddingTop={1}
        direction="column"
        spacing={4}
        alignItems="center"
      >
        <Box bgcolor="white" padding={2} borderRadius={2} width="90vw">
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
          <SearchForBookWindowCard
            setBook={setBook}
            handleNext={handleNext}
            active={book === undefined || activeStep === 0}
          />
          {/** Check information */}
          <CheckInformationWIndow
            book={book}
            handleBack={handleBack}
            handleNext={handleNext}
            setEdit={setEdit}
            show={!edit && activeStep > 0}
          />

          {/** Set quality */}

          <ConditionCheckWindow
            handleNext={handleNext}
            handleBack={handleBack}
            show={activeStep > 1 && book != null}
            setCondition={setCondition}
            setDescription={setdescribtion}
            active={activeStep === 2}
          />
        </Stack>

        <SetPriceWindow
          book={book}
          handleBack={handleBack}
          handleNext={handleDone}
          setPrice={setPrice}
          show={book != null && activeStep > 2}
          active={activeStep === 3}
        />
      </Stack>
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
