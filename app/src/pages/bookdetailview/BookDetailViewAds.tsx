import {
  Typography,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Container,
  Snackbar,
  Alert,
} from '@mui/material';
import { useEffect, useState } from 'react';
import AdAccordion from '../../components/AdAccordion';
import AdService from '../../services/AdService';
import { AdStatus, Advert } from '../../services/Advert';

interface Props {
  bookUid: number;
}

function BookDetailViewAds({ bookUid }: Props) {
  const [ads, setAds] = useState<Advert[] | undefined>([]);
  const [sort, setSort] = useState('');
  const [fetchedAds, setFetchedAds] = useState(false);
  const [changesSaved, setChangesSaved] = useState<boolean | undefined>(
    undefined,
  );

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  useEffect(() => {
    const getAds = async () => {
      const newAds = await AdService.getAdsFromBook(bookUid.toString());
      setAds(newAds);
      setFetchedAds(true);
    };
    if (!fetchedAds) getAds();
  }, [bookUid, fetchedAds]);

  const handleClose = () => {
    setChangesSaved(undefined);
  };

  return (
    <Container
      sx={{
        marginTop: '50px',
        display: 'flex',
        flexDirection: 'column',
        minWidth: '300px',
        flexShrink: 0,
        paddingBottom: '10px',
      }}
    >
      {changesSaved !== undefined && (
        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          open={changesSaved !== undefined}
          onClose={handleClose}
          key="topcenter"
        >
          <Alert severity={changesSaved === true ? 'success' : 'error'}>
            {changesSaved
              ? 'Ändringarna sparades!'
              : 'Något gick fel, försök igen senare!'}
          </Alert>
        </Snackbar>
      )}
      <Container sx={{ display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            flex: 3,
            margin: 'auto',
            marginTop: 0,
            justifyContent: 'start',
          }}
        >
          <Typography variant="h4">Annonser</Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            flex: 1,
            justifyContent: 'end',
          }}
        >
          <FormControl sx={{ m: 1, mr: 0, minWidth: 95 }}>
            <InputLabel id="sorting-label">Sortera</InputLabel>
            <Select
              labelId="sorting-label"
              id="sorting"
              value={sort}
              label="Sortera"
              onChange={handleChange}
              autoWidth
            >
              <MenuItem value={10}>Lägst pris först</MenuItem>
              <MenuItem value={20}>Högst pris först</MenuItem>
              <MenuItem value={30}>Bäst skick först</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Container>

      {ads &&
        ads
          .filter((ad) => ad.status === AdStatus.AVAILABLE)
          .map((ad) => (
            <AdAccordion
              ad={ad}
              onChangesSaved={(onChangesSaved) => {
                setFetchedAds(false);
                setChangesSaved(onChangesSaved);
              }}
              onAdDelete={() => setFetchedAds(false)}
            />
          ))}
    </Container>
  );
}
export default BookDetailViewAds;
