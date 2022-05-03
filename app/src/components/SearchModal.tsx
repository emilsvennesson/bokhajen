import { Box, Modal, Typography } from '@mui/material';
import { Book } from 'cremona';
import React, { useEffect, useState } from 'react';
import SearchService from '../services/SearchService';

interface Props {
  query: string;
}

export default function SearchModal({ query }: Props) {
  const [results, setResults] = useState<Book[]>([]);
  const [open, setOpen] = useState(false);
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
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {query}
        </Typography>
        {results.map((book) => (
          <div key={book.uid}>
            {book.name && (
              <Typography id="modal-title" variant="h6" component="h2">
                {book.name}
              </Typography>
            )}
            <Typography id="modal-description" variant="body2" component="p">
              {book.description}
            </Typography>
          </div>
        ))}
      </Box>
    </Modal>
  );
}
