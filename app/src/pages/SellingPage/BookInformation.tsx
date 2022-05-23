import React from 'react';
import { Book } from 'cremona/dist/Book';
import { Box, Stack } from '@mui/material';
import InformationTextLine from '../../components/InformationTextLine';

interface BookInformationProps {
  book?: Book;
  name?: string;
  year?: string;
  isbn?: string;
  authors?: string[];
}

/**
 * This component is used in the CheckInformationCard that shows all relevant information of a book
 * @param book : Book \ this books information will be shown if not overriden by the other parameters
 * @param name : string? \ Overrides the name of the book if defined
 * @param year : string? \ Overrides the year of the book if defined
 * @param isbn : string? \ Overrides the isbn of the book if defined
 * @param authors : string[ ]? \ Overrides the authors of the book if defined
 *
 * @returns BookInformation component
 */
export default function BookInformation({
  book,
  name,
  year,
  isbn,
  authors,
}: BookInformationProps) {
  return (
    <Stack padding="10px" flexDirection="row" overflow="hidden" flexWrap="wrap">
      {/* Cover */}
      <Box component="div" height={200} width={150}>
        <Box
          component="img"
          src={book?.image ?? ''}
          alt={book?.name ?? ''}
          loading="lazy"
          maxHeight={200}
          maxWidth={150}
        />
      </Box>
      <Box display="flex" flexDirection="column">
        <InformationTextLine textBold fontSize={20}>
          {name ?? (book?.name?.toString() ? book.name.toString() : '')}
        </InformationTextLine>
        <InformationTextLine textBold label="Year:" disableWhenEmpty>
          {year ?? (book?.year?.toString() ? book.year.toString() : '')}
        </InformationTextLine>
        <InformationTextLine textBold label="ISBN-Number:" disableWhenEmpty>
          {isbn ?? (book?.isbn?.toString() ? book.isbn.toString() : '')}
        </InformationTextLine>
        <InformationTextLine textBold label="Author:" disableWhenEmpty>
          {authors?.toString() ?? book?.authors?.toString() ?? ''}
        </InformationTextLine>
      </Box>
    </Stack>
  );
}
