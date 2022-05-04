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
}

const bookLimit = 5;

export default function SearchModal({ query, onChange, onClose, open }: Props) {
  const [results, setResults] = useState<Book[]>([]);
  // const [open, setOpen] = useState(true);
  const [loadingBooks, setLoadingBooks] = useState(true);
  const [queryOffset, setQueryOffset] = useState(1);

  useEffect(() => {
    const search = async () => {
      setLoadingBooks(true);
      const books = await SearchService.search(query, bookLimit);
      setQueryOffset(1);
      setResults(books);
      setLoadingBooks(false);
    };
    search();
  }, [query]);

  const handleLoadMore = () => {
    setLoadingBooks(true);
    SearchService.search(query, bookLimit, queryOffset * bookLimit).then(
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
      // TODO: fix closing manually good
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
            maxHeight: '100%',
            height: '80%',
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
            <SearchResultItem key={book.uid} book={book} />
          ))}
          {loadingBooks &&
            [...Array(3)].map((e, i) => (
              // eslint-disable-next-line react/no-array-index-key
              <SearchResultItem key={i} />
            ))}
          {!loadingBooks && results.length >= bookLimit && (
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
