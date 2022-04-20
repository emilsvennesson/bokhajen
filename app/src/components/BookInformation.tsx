import React from 'react';
import { Box } from '@mui/material';
import InformationTextLine from './InformationTextLine';

interface BookInformationProps {
  name: string;
  edition: string;
  year: string;
  ISBN: string;
  course: string;
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
        <InformationTextLine textBold fontSize={25}>
          {name}
        </InformationTextLine>
        <InformationTextLine textBold label="Edition:">
          {edition}
        </InformationTextLine>
        <InformationTextLine textBold label="Year:">
          {year}
        </InformationTextLine>
        <InformationTextLine textBold label="ISBN-Number:">
          {ISBN}
        </InformationTextLine>
        <InformationTextLine textBold label="Course:">
          {course}
        </InformationTextLine>
      </Box>
    </Box>
  );
}
