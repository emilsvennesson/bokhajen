import { Box, Grow, Paper } from '@mui/material';
import React from 'react';
import ConditionCheckCard from '../ConditionCheckCard';

interface ConditionCheckWindowProps {
  handleBack: Function;
  handleNext: Function;
  setCondition: Function;
  setDescription: Function;
  show: boolean;
  active: boolean;
}

export default function ConditionCheckWindow({
  handleBack,
  handleNext,
  setCondition,
  setDescription,
  show,
  active,
}: ConditionCheckWindowProps) {
  return (
    <Grow in={show}>
      <Box flexGrow={3}>
        <Paper elevation={5}>
          <ConditionCheckCard
            backButtonHandler={() => handleBack()}
            nextButtonHandler={(incondition: string, inDescribtion: string) => {
              handleNext();
              setCondition(incondition);
              setDescription(inDescribtion);
            }}
            disabled={!active}
          />
        </Paper>
      </Box>
    </Grow>
  );
}
