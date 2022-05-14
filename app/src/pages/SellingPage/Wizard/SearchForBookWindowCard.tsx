import { Paper, Stack, Typography, Button } from '@mui/material';
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
          disabled={!active || !canNext}
          endIcon={<EastOutlinedIcon />}
        >
          Fortsätt
        </Button>
      </Stack>
    </Paper>
  );
}
