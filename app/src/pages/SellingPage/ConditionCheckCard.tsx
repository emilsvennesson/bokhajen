import {
  Stack,
  Button,
  Typography,
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';
import React from 'react';
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import { BookCondition } from '../../config/BookCondition';

interface ConditionCheckCardProps {
  backButtonHandler: Function;
  nextButtonHandler: Function;
  active: boolean;
  disabled?: boolean;
}

/**
 * This is an interface that gives the relevant input components for the user to use in order to define the quality off the book
 * @param backButtonHandler : Function \ This will excecute when the back button is clicked
 * @param nextButtonHandler : Function \ This will excecute when the next button is clicked, will fetch condition and describtion in parameters
 * @param disabled : boolean \ When this is true the buttons and textfields will be disabled
 * @returns ConditionCheckCard component
 */
export default function ConditionCheckCard({
  backButtonHandler,
  nextButtonHandler,
  disabled = false,
  active,
}: ConditionCheckCardProps) {
  const [condition, setCondition] = React.useState(BookCondition.GOOD);
  const [describtion, setDescribtion] = React.useState('');

  const handleConditionChange = (event: SelectChangeEvent) => {
    setCondition(event.target.value as any);
  };

  const handleDescribtionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setDescribtion((event.target as HTMLInputElement).value);
  };

  const handleContinue = () => {
    nextButtonHandler(condition, describtion);
  };
  return (
    <Stack
      bgcolor="white"
      direction="column"
      alignItems="center"
      padding={2}
      borderRadius={2}
      spacing={2}
      minHeight="360px"
      minWidth="300px"
    >
      <Stack direction="row" width="100%" alignContent="left">
        <Button
          variant="contained"
          disabled={disabled}
          onClick={() => backButtonHandler()}
        >
          <KeyboardBackspaceOutlinedIcon />
        </Button>
        <Typography textAlign="center" variant="h5" flexGrow={2}>
          Tillstånd
        </Typography>
        <Box flexGrow={1} />
      </Stack>

      <FormControl fullWidth disabled={!active}>
        <Select
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={condition}
          onChange={handleConditionChange}
        >
          <MenuItem value={BookCondition.BAD}>{BookCondition.BAD}</MenuItem>
          <MenuItem value={BookCondition.GOOD}>{BookCondition.GOOD}</MenuItem>
          <MenuItem value={BookCondition.EXCELLENT}>
            {BookCondition.EXCELLENT}
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        disabled={!active}
        fullWidth
        multiline
        rows={4}
        value={describtion}
        onChange={handleDescribtionChange}
        label="Beskriv kvaliten på boken"
      />
      <Button
        variant="contained"
        size="large"
        onClick={handleContinue}
        disabled={disabled}
      >
        Fortsätt
      </Button>
    </Stack>
  );
}
