import { Box, List, Modal, TextField, Divider } from '@mui/material';
import { Book } from 'cremona';
import React, { useEffect, useState } from 'react';
import SearchService from '../../services/SearchService';
import SearchResultItem from './SearchResultItem';

interface Props {
  query: string;
  onChange: (query: string) => void;
}

export default function SearchModal({ query, onChange }: Props) {
  const [results, setResults] = useState<Book[]>([]);
  const [open, setOpen] = useState(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    const search = async () => {
      const books = await SearchService.search(query);
      setResults(books);
    };
    search();
  }, [query]);
  return (
    <Modal
      open={open}
      // TODO: fix closing manually good
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Box
        component="main"
        sx={{
          position: 'relative',
          top: '50px',
          width: 600,
          bgcolor: 'background.paper',
          border: '2px solid #FFF',
          boxShadow: 24,
          p: 4,
          minHeight: '300px',
          borderRadius: 2,
          maxHeight: 'calc(100vh - 200px)',
          overflowY: 'hidden',
        }}
      >
        <TextField
          autoFocus
          value={query}
          onChange={(e) => onChange(e.target.value)}
          sx={{ height: '80px' }}
          fullWidth
        />
        <Divider />
        <List
          sx={{
            overflowY: 'auto',
            maxHeight: '100%',
            height: '80%',
            mt: 1,
            '&::-webkit-scrollbar': {
              width: 7,
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'darkgrey',
              outline: `1px solid slategrey`,
            },
          }}
        >
          {results.map((book) => (
            <SearchResultItem key={book.uid} book={book} />
          ))}
        </List>
      </Box>
    </Modal>
  );
}
