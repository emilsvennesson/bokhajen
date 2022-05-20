import React, { useEffect, useState } from 'react';

import {
  Box,
  Stack,
  Stepper,
  Step,
  StepLabel,
  Snackbar,
  Alert,
  Grid,
} from '@mui/material';
import { Book } from 'cremona/dist/Book';
import { useNavigate, useParams } from 'react-router-dom';
import BookInformationInput from './BookInformationInput';
import AdService from '../../services/AdService';
import { NewAdvert, AdStatus } from '../../services/Advert';
import { useAuth } from '../../hooks/FBAuthProvider';
// eslint-disable-next-line import/no-named-as-default

import { BookCondition } from '../../config/BookCondition';

import CremonaService from '../../services/CremonaService';
import CheckInformationWindow from './wizard2/CheckInformationWIndow';
import ConditionCheckWindow from './wizard2/ConditionCheckWindow';
import SearchForBookWindowCard from './wizard2/SearchForBookWindowCard';
import SetPriceWindow from './wizard2/SetPriceWindow';
import OverlayCircularProgress from '../../components/OverlayCircularProgress';

const steps = [
  'Hitta din bok',
  'Dubbelkolla Informationen',
  'Beskriv Kvaliten',
  'Sätt ett pris',
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
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [edit, setEdit] = useState(false);
  const [bookPrice, setPrice] = useState<number | undefined>(undefined);
  const [bookCondition, setCondition] = useState<BookCondition>(
    BookCondition.GOOD,
  );
  const [description, setDescription] = useState('');
  const [error, setError] = useState<Error>({
    open: false,
    message: '',
  });

  const [activeStep, setActiveStep] = useState<number>(0);
  const [siteLoading, setSiteLoading] = useState(false);

  const { user, loading } = useAuth();
  const navigate = useNavigate();

  let { uid } = useParams();
  if (!uid) uid = '';

  const uidInt = parseInt(uid, 10);
  useEffect(() => {
    if (!loading) {
      if (uid) {
        const getBook = async () => {
          setSiteLoading(true);
          let cBook: Book;
          try {
            cBook = await CremonaService.getBook(uidInt);
            setBook(cBook);
            if (activeStep < 1) setActiveStep(1);
          } catch (e) {
            // do some cringe
          }

          setSiteLoading(false);
        };
        getBook();
      }
    }
  }, [user, uid, uidInt, navigate, loading, activeStep]);

  if (loading && siteLoading) {
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
    if (activeStep === 1 && uid) {
      navigate('/sell', { replace: true });
    }
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
    if (bookPrice === undefined || bookPrice === 0) {
      displayError('Price is not set');
      return;
    }

    const ad: NewAdvert = {
      userUid: user.uid,
      bookId: book.uid.toString(),
      price: bookPrice,
      condition: bookCondition,
      conditionDescription: description,
      status: AdStatus.AVAILABLE,
    };

    AdService.publishAd(ad)
      .then(() => {
        navigate('/account/ads', { replace: true });
      })
      .catch((res) => {
        displayError(`Error:${res.data.error}`);
      });
  };

  return (
    <Box paddingTop={2}>
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
        direction="column"
        spacing={2}
        alignItems="center"
        flexWrap="wrap"
        marginBottom="200px"
      >
        <Box bgcolor="white" borderRadius={2} maxWidth="100%" width="90%">
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
        <Grid
          container
          direction="row"
          width="95%"
          rowGap={1}
          columnSpacing={1}
          justifyContent="space-evenly"
          margin={0}
        >
          <Grid minWidth="340px" item maxWidth="370px" flexGrow={1} xl={3}>
            {/** Search ISBN */}
            <SearchForBookWindowCard
              setBook={setBook}
              handleNext={handleNext}
              active={activeStep === 0}
              canNext={book !== undefined}
            />
          </Grid>

          {/** Check information */}
          <Grid item maxWidth="650px" minWidth="280px" flexGrow={2} xl={5}>
            <CheckInformationWindow
              book={book}
              handleBack={handleBack}
              handleNext={handleNext}
              setEdit={setEdit}
              active={activeStep === 1}
              show={!edit && activeStep > 0}
            />
          </Grid>

          {/** Set quality */}
          <Grid item maxWidth="350px" flexGrow={1} xl={3}>
            <ConditionCheckWindow
              handleNext={handleNext}
              handleBack={handleBack}
              show={activeStep > 1 && book != null}
              setCondition={setCondition}
              setDescription={setDescription}
              active={activeStep === 2}
            />
          </Grid>
          <Grid item maxWidth="600px" flexGrow={2}>
            <SetPriceWindow
              book={book}
              handleBack={handleBack}
              handleNext={handleDone}
              setPrice={setPrice}
              show={book != null && activeStep > 2}
              active={activeStep === 3}
            />
          </Grid>
        </Grid>
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
