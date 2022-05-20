import { Paper, Stack, Typography, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Book } from 'cremona';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import SearchModal from '../../../components/NavigationBar/SearchModal';

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
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchModalOpen, setSearchModalOpen] = useState<boolean>(false);

  const handleChangedSearchQuery = (query: string) => {
    if (query) {
      setSearchModalOpen(true);
    } else {
      setSearchModalOpen(false);
    }
    setSearchQuery(query);
  };

  return (
    <>
      <SearchModal
        query={searchQuery}
        onChange={handleChangedSearchQuery}
        open={searchModalOpen}
        onClose={() => {
          setSearchModalOpen(false);
        }}
        onBookClick={(book: Book) => {
          setBook(book);
          setSearchModalOpen(false);
          setSearchQuery(book.name);
        }}
      />
      <Paper elevation={5}>
        <Stack
          bgcolor="white"
          alignItems="center"
          spacing={5}
          padding={2}
          minHeight="360px"
        >
          <Typography textAlign="center" variant="h2">
            Starta!
          </Typography>

          <TextField
            fullWidth
            placeholder="Boktitel/ISBN/Kurskod"
            label="Boktitel/ISBN/Kurskod"
            value={searchModalOpen ? '' : searchQuery}
            onChange={(e) => handleChangedSearchQuery(e.target.value)}
            onClick={() => {
              if (searchQuery && !searchModalOpen && active) {
                setSearchModalOpen(true);
              }
            }}
            disabled={!active}
          />
          <Button
            size="large"
            variant="contained"
            onClick={() => {
              handleNext();
            }}
            disabled={!active || !canNext}
            endIcon={<EastOutlinedIcon />}
          >
            Fortsätt
          </Button>
        </Stack>
      </Paper>
    </>
  );
}
