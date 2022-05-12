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
  Stack,
  Link,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AdAccordion from '../../components/ads/AdAccordion';
import AdSkeleton from '../../components/ads/AdSkeleton';
import AdService from '../../services/AdService';
import { AdStatus, Advert } from '../../services/Advert';

interface Props {
  bookUid: number;
}

function BookDetailViewAds({ bookUid }: Props) {
  const [ads, setAds] = useState<Advert[] | undefined>(undefined);
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          mb: 1,
        }}
      >
        <Typography variant="h4">Annonser</Typography>
        <FormControl sx={{ minWidth: '150px' }}>
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
      <Stack spacing={1}>
        {ads
          ? ads
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
              ))
          : Array.from({ length: 4 }, () => <AdSkeleton />)}
        {ads && ads.length === 0 && (
          <Box>
            <Typography variant="h6">
              Det finns inga annonser tillgängliga för den här boken.
            </Typography>

            <Link component={RouterLink} to="/sell" variant="h6">
              Bli först med att sälja denna bok
            </Link>
          </Box>
        )}
      </Stack>
    </Container>
  );
}
export default BookDetailViewAds;
