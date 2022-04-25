import {
  Stack,
  Button,
  Typography,
  Box,
  FormControlLabel,
  Checkbox,
  TextField,
} from '@mui/material';
import React from 'react';

interface ConditionCheckCardProps {
  backButtonHandler: Function;
  nextButtonHandler: Function;
  disabled?: boolean;
}

export default function ConditionCheckCard({
  backButtonHandler,
  nextButtonHandler,
  disabled,
}: ConditionCheckCardProps) {
  return (
    <Stack
      bgcolor="white"
      direction="column"
      alignItems="center"
      padding={2}
      borderRadius={2}
      spacing={2}
    >
      <Stack direction="row" width="100%" alignContent="left">
        <Button
          variant="contained"
          disabled={disabled}
          onClick={() => backButtonHandler()}
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
        onClick={() => nextButtonHandler()}
        disabled={disabled}
      >
        Continue
      </Button>
    </Stack>
  );
}

ConditionCheckCard.defaultProps = {
  disabled: false,
};
