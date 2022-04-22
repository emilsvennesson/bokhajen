import React from 'react';
import { Book } from 'cremona/dist/Book';
import { Box } from '@mui/material';
import InformationTextLine from './InformationTextLine';

interface BookInformationProps {
  book: Book;
}

export default function BookInformation({ book }: BookInformationProps) {
  function formatt(text: string | null): string {
    if (text === null) {
      return '';
    }
    return text;
  }

  return (
    <Box
      display="flex"
      padding="40px"
      flexDirection="row"
      width="400px"
      overflow="hidden"
    >
      {/* Cover */}
      <Box minWidth={130} height={200} sx={{ backgroundColor: 'green' }} />
      <Box display="flex" flexDirection="column">
        <InformationTextLine textBold fontSize={25}>
          {formatt(book.name)}
        </InformationTextLine>
        <InformationTextLine textBold label="Describtion:">
          {formatt(book.description)}
        </InformationTextLine>
        <InformationTextLine textBold label="Year:">
          {book.year?.toString() ? book.year.toString() : ''}
        </InformationTextLine>
        <InformationTextLine textBold label="ISBN-Number:">
          {book.year?.toString() ? book.year.toString() : ''}
        </InformationTextLine>
        <InformationTextLine textBold label="Course:">
          {book.authors.toString()}
        </InformationTextLine>
      </Box>
    </Box>
  );
}
