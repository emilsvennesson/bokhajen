import { Box, Paper, Button, Stack, TextField, Grow } from '@mui/material';
import { Book } from 'cremona';
import React from 'react';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import StorePriceCard from '../StorePriceCard';

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
      <Paper elevation={5}>
        <Box padding={1}>
          {/* Back button */}

          <Button
            onClick={() => handleBack()}
            variant="contained"
            disabled={!active}
          >
            <KeyboardBackspaceOutlinedIcon />
          </Button>
        </Box>
        <Stack
          alignItems="center"
          justifyContent="center"
          direction="column"
          paddingBottom="30px"
          spacing={2}
        >
          {/* Price reference cards */}
          <StorePriceCard price={book?.price ?? 0} />

          {/* Price textfield */}
          <Box flexGrow={1}>
            <TextField
              type="number"
              label="Pris"
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
              Fortsätt
            </Button>
          </Box>
        </Stack>
      </Paper>
    </Grow>
  );
}
