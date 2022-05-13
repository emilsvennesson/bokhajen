import {
  Box,
  List,
  Modal,
  TextField,
  Divider,
  Typography,
  Button,
  ListItem,
} from '@mui/material';
import SentimentVeryDissatisfiedSharpIcon from '@mui/icons-material/SentimentVeryDissatisfiedSharp';
import { Book } from 'cremona';
import React, { useEffect, useState } from 'react';
import SearchService from '../../services/SearchService';
import SearchResultItem from './SearchResultItem';

interface Props {
  query: string;
  onChange?: (query: string) => void;
  onClose?:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
  open?: boolean;
  onBookClick?: (book: Book) => void;
}

const BOOK_LIMIT = 5;

export default function SearchModal({
  query,
  onChange,
  onClose,
  open,
  onBookClick,
}: Props) {
  const [results, setResults] = useState<Book[]>([]);
  // const [open, setOpen] = useState(true);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [queryOffset, setQueryOffset] = useState(1);

  useEffect(() => {
    let isSubscribed = true;

    setLoadingBooks(true);
    setResults([]);
    SearchService.search(query, BOOK_LIMIT).then((books) => {
      if (isSubscribed) {
        setQueryOffset(1);
        setResults(books);
        setLoadingBooks(false);
      }
    });
    return () => {
      isSubscribed = false;
    };
  }, [query]);

  const handleLoadMore = () => {
    setLoadingBooks(true);
    SearchService.search(query, BOOK_LIMIT, queryOffset * BOOK_LIMIT).then(
      (books) => {
        setQueryOffset(queryOffset + 1);
        setResults([...results, ...books]);
        setLoadingBooks(false);
      },
    );
  };

  return (
    <Modal
      open={open || false}
      onClose={onClose}
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
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value);
            }
          }}
          sx={{ height: '80px' }}
          fullWidth
        />
        <Divider />
        <List
          sx={{
            overflowY: 'auto',
            height: '90%',
            mt: 1,
          }}
        >
          {query.length >= 3 && results.length === 0 && !loadingBooks && (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Typography variant="h6">Hittade inga böcker</Typography>
              <SentimentVeryDissatisfiedSharpIcon
                color="secondary"
                sx={{ fontSize: 80 }}
              />
            </Box>
          )}
          {results.map((book) => (
            <SearchResultItem
              key={book.uid}
              book={book}
              onBookClick={onBookClick}
            />
          ))}
          {loadingBooks &&
            [...Array(3)].map(() => (
              <SearchResultItem key={Math.random() * 10000} />
            ))}
          {!loadingBooks && results.length >= BOOK_LIMIT && (
            <ListItem
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '50px',
              }}
            >
              <Button variant="text" onClick={handleLoadMore}>
                Ladda in fler resultat
              </Button>
            </ListItem>
          )}
        </List>
      </Box>
    </Modal>
  );
}
