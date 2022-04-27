import React from 'react';
import { Book } from 'cremona/dist/Book';
import { Box } from '@mui/material';
import InformationTextLine from '../../components/InformationTextLine';

interface BookInformationProps {
  book: Book;
  name?: string;
  year?: string;
  isbn?: string;
  authors?: string[];
}

export default function BookInformation({
  book,
  name,
  year,
  isbn,
  authors,
}: BookInformationProps) {
  return (
    <Box display="flex" padding="40px" flexDirection="row" overflow="hidden">
      {/* Cover */}
      <Box component="div" height={200} width={150}>
        <Box
          component="img"
          src={book.image}
          alt={book.name}
          loading="lazy"
          maxHeight={200}
          maxWidth={150}
        />
      </Box>

      <Box display="flex" flexDirection="column">
        <InformationTextLine textBold fontSize={20}>
          {name ?? (book.name?.toString() ? book.name.toString() : '')}
        </InformationTextLine>
        <InformationTextLine textBold label="Year:">
          {year ?? (book.year?.toString() ? book.year.toString() : '')}
        </InformationTextLine>
        <InformationTextLine textBold label="ISBN-Number:">
          {isbn ?? (book.isbn?.toString() ? book.isbn.toString() : '')}
        </InformationTextLine>
        <InformationTextLine textBold label="Author:">
          {authors?.toString() ?? book.authors.toString()}
        </InformationTextLine>
      </Box>
    </Box>
  );
}
BookInformation.defaultProps = {
  name: undefined,
  year: undefined,
  isbn: undefined,
  authors: undefined,
};
