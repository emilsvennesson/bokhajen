import React from 'react';
import { Box } from '@mui/material';
import InformationTextLine from './InformationTextLine';

interface BookInformationProps {
  name: String;
  edition: String;
  year: String;
  ISBN: String;
  course: String;
}

export default function BookInformation({
  name,
  edition,
  year,
  ISBN,
  course,
}: BookInformationProps) {
  return (
    <Box
      display="flex"
      borderRadius="8px"
      sx={{ backgroundColor: 'white', padding: '40px' }}
      marginRight="20px"
      flexDirection="row"
    >
      {/* Cover */}
      <Box width={150} height={200} sx={{ backgroundColor: 'green' }} />
      <Box display="flex" flexDirection="column">
        <InformationTextLine>{name}</InformationTextLine>
        <InformationTextLine>{edition}</InformationTextLine>
        <InformationTextLine>{year}</InformationTextLine>
        <InformationTextLine>{ISBN}</InformationTextLine>
        <InformationTextLine>{course}</InformationTextLine>
      </Box>
    </Box>
  );
}
