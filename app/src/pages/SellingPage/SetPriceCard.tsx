import {
  Fade,
  Stack,
  Box,
  Grow,
  Button,
  Typography,
  TextField,
  Card,
} from '@mui/material';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { Book } from 'cremona/dist/Book';
import React, { useRef } from 'react';

interface SetPriceCardProps {
  book?: Book;
  backButtonHandler: Function;
  continueButtonHandler: Function;
  setPrice: Function;
  show?: boolean;
}

/**
 * SetPriceCard, this card has an absolute position in the middle of the screen with a grey background, the user can fill in a price and see a reference price from other apis bellow
 * @param book : Book | undefined \ the book that the user will be referenced to get the price from other api's
 * @param backButtonHandler : Function \ the handler that will execute when the user presses the back button
 * @param continueButtonHandler : Function \ the handler that will execute when the user presses the continue button
 * @param show : boolean? \ if true the card will be shown, set condition if you only want to show this card when that condition is true
 * @returns SetPriceCard component
 */
export default function SetPriceCard({
  book,
  backButtonHandler,
  continueButtonHandler,
  setPrice,
  show = false,
}: SetPriceCardProps) {
  const textFieldRef = useRef('priceField');

  const handleContinue = () => {
    continueButtonHandler();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setPrice(+value);
  };

  return (
    <Fade in={show}>
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
        {/* Background box */}
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
        {/* Contents */}
        <Grow in={show}>
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
            {/* Back button */}
            <Box width="100%">
              <Button onClick={() => backButtonHandler()} variant="contained">
                <KeyboardBackspaceOutlinedIcon />
              </Button>
            </Box>

            {/* Title */}
            <Typography variant="h3">Set a price</Typography>

            {/* Price textfield */}
            <TextField
              inputRef={textFieldRef}
              type="number"
              label="price"
              onChange={handleChange}
            />

            {/* Continue button */}
            <Button
              onClick={() => handleContinue()}
              variant="contained"
              size="large"
            >
              Continue
            </Button>

            {/* Price reference cards */}
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
  );
}
