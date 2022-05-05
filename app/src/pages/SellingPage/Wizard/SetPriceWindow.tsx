import {
  Box,
  Paper,
  Button,
  Stack,
  Card,
  Typography,
  TextField,
  Grow,
} from '@mui/material';
import { Book } from 'cremona';
import React from 'react';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

interface SetPriceWindowProps {
  book: Book | undefined;
  handleBack: Function;
  handleNext: Function;
  setPrice: Function;
  show: boolean;
  active?: boolean;
}

export default function SetPriceWindow({
  book,
  handleNext,
  handleBack,
  setPrice,
  show,
  active = true,
}: SetPriceWindowProps) {
  return (
    <Grow in={show}>
      <Box width="600px">
        <Paper elevation={5}>
          <Box padding={1}>
            {/* Back button */}
            <Box flexShrink={20} height="100%">
              <Button
                onClick={() => handleBack()}
                variant="contained"
                disabled={!active}
              >
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
                    disabled={!active}
                  />
                </Box>

                {/* Continue button */}
                <Box flexGrow={1} flexShrink={20}>
                  <Button
                    onClick={() => handleNext()}
                    variant="contained"
                    size="large"
                    disabled={!active}
                  >
                    Continue
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Paper>
      </Box>
    </Grow>
  );
}
