import React, { useEffect } from 'react';
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
  Paper,
  Card,
  TextField,
} from '@mui/material';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Book } from 'cremona/dist/Book';
import { useNavigate } from 'react-router-dom';
import SearchBook from '../../components/SearchBook';
import CheckInformationCard from './CheckInformationCard';
import ConditionCheckCard from './ConditionCheckCard';
import BookInformationInput from './BookInformationInput';
import Conditions from '../../config/Conditions';
import AdService from '../../services/AdService';
import { NewAdvert } from '../../services/Advert';
import { useAuth } from '../../hooks/FBAuthProvider';
import OverlayCircularProgress from '../../components/OverlayCircularProgress';

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
  const searchForBookWindow = (
    <Box flexGrow={1}>
      <Paper elevation={5}>
        <Stack
          bgcolor="white"
          alignItems="center"
          spacing={5}
          padding={2}
          paddingTop={5}
          borderRadius={2}
          height="335px"
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
            endIcon={<EastOutlinedIcon />}
          >
            Get started
          </Button>
        </Stack>
      </Paper>
    </Box>
  );

  const checkInformationWindow = (
    <Box flexGrow={1.5} height="300px">
      <Paper elevation={5}>
        <CheckInformationCard
          book={book}
          backButtonHandler={() => {
            handleBack();
          }}
          disabled={activeStep !== 1 || edit}
          continueButtonHandler={() => handleNext()}
          editButtonHandler={() => setEdit(true)}
        />
      </Paper>
    </Box>
  );

  const conditionCheckWindow = (
    <Box flexGrow={3}>
      <Paper elevation={5}>
        <ConditionCheckCard
          backButtonHandler={() => handleBack()}
          nextButtonHandler={(incondition: string, inDescribtion: string) => {
            handleNext();
            setCondition(incondition);
            setdescribtion(inDescribtion);
          }}
          disabled={activeStep === 3}
        />
      </Paper>
    </Box>
  );

  const setPriceWindow = (
    <Box width="600px">
      <Paper elevation={5}>
        <Box padding={1}>
          {/* Back button */}
          <Box flexShrink={20} height="100%">
            <Button onClick={() => handleBack()} variant="contained">
              <KeyboardBackspaceOutlinedIcon />
            </Button>
          </Box>
          <Stack
            height="200px"
            bgcolor="white"
            zIndex={1}
            borderRadius={2}
            alignItems="center"
            justifyContent="center"
            direction="row"
            paddingBottom="30px"
            spacing={3}
          >
            <Stack spacing={2} alignItems="center" flexShrink={20}>
              {/* Price reference cards */}
              <Box flexShrink={20}>
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
              </Box>
              {/* Price textfield */}
              <Box flexGrow={1}>
                <TextField
                  type="number"
                  label="price"
                  onChange={(value) => setPrice(+value.target.value)}
                />
              </Box>

              {/* Continue button */}
              <Box flexGrow={1} flexShrink={20}>
                <Button
                  onClick={() => handleDone()}
                  variant="contained"
                  size="large"
                >
                  Continue
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );

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
        <Grow in={book != null && activeStep > 2}>{setPriceWindow}</Grow>
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
