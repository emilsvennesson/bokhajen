import { Box, Paper, Stack, Typography, Button } from '@mui/material';
import { Book } from 'cremona';
import React from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SearchBook from '../../../components/SearchBook';

interface SearchForBookWindowCardProps {
  setBook: Function;
  handleNext: Function;
  active: boolean;
  canNext: boolean;
}

export default function SearchForBookWindowCard({
  setBook,
  handleNext,
  active,
  canNext,
}: SearchForBookWindowCardProps) {
  return (
    <Box flexGrow={1}>
      <Paper elevation={5}>
        <Stack
          bgcolor="white"
          alignItems="center"
          spacing={5}
          padding={2}
          paddingTop={5}
          borderRadius={2}
          height="335px"
        >
          <Typography textAlign="center" variant="h2">
            Get started
          </Typography>
          <SearchBook
            disabled={!active}
            bookSearchHandler={(inBook: Book) => setBook(inBook)}
          />
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              handleNext();
            }}
            disabled={!active && canNext}
            endIcon={<EastOutlinedIcon />}
          >
            Get started
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}
