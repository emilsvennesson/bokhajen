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
    <Box display="flex" padding="40px" flexDirection="row" overflow="hidden">
      {/* Cover */}
      <img src={book.image} alt={book.name} loading="lazy" height={200} />

      <Box display="flex" flexDirection="column">
        <InformationTextLine textBold fontSize={20}>
          {formatt(book.name)}
        </InformationTextLine>
        <InformationTextLine textBold label="Year:">
          {book.year?.toString() ? book.year.toString() : ''}
        </InformationTextLine>
        <InformationTextLine textBold label="ISBN-Number:">
          {book.isbn?.toString() ? book.isbn.toString() : ''}
        </InformationTextLine>
        <InformationTextLine textBold label="Author:">
          {book.authors.toString()}
        </InformationTextLine>
      </Box>
    </Box>
  );
}
