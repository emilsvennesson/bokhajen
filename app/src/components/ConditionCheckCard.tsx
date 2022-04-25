import {
  Stack,
  Button,
  Typography,
  Box,
  FormControlLabel,
  TextField,
  RadioGroup,
  FormLabel,
  FormControl,
  Radio,
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
  const [value, setValue] = React.useState('good');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };
  return (
    <Stack
      bgcolor="white"
      direction="column"
      alignItems="center"
      padding={2}
      borderRadius={2}
      spacing={2}
      height="100%"
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

      <FormControl>
        <FormLabel id="demo-controlled-radio-buttons-group">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel value="torn" control={<Radio />} label="Torn" />
          <FormControlLabel value="good" control={<Radio />} label="Good" />
          <FormControlLabel value="new" control={<Radio />} label="New" />
        </RadioGroup>
      </FormControl>
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
