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
import { Book } from 'cremona/dist/Book';
import React from 'react';

interface SetPriceCardProps {
  book: Book | book;
  backButtonHandler: Function;
  disabled?: boolean;
}

export default function SetPriceCard({
  book,
  backButtonHandler,
  disabled,
}: SetPriceCardProps) {
  return (
    <Fade in={disabled}>
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
        <Grow in={disabled}>
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
              <Button onClick={() => backButtonHandler()} variant="contained">
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
  );
}

SetPriceCard.defaultProps = {
  disabled: false,
};
