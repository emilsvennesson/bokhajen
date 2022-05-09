import {
  Typography,
  SelectChangeEvent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  Container,
} from '@mui/material';
import { useEffect, useState } from 'react';
import AdAccordion from '../../components/AdAccordion';
import EditAdModal from '../../components/edit_ad_modal/EditAdModal';
import AdService from '../../services/AdService';
import { Advert } from '../../services/Advert';

interface Props {
  bookUid: number;
}

const fakeAd: Advert = {
  uid: 'uid',
  userId: 'userid',
  bookId: 'bookid',
  price: 199,
  condition: 'condition',
  status: 'available',
  conditionDescription:
    'condition description. lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris',
};

function BookDetailViewAds({ bookUid }: Props) {
  const [ads, setAds] = useState<Advert[] | undefined>([]);

  const [sort, setSort] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  useEffect(() => {
    const getAds = async () => {
      const newAds = await AdService.getAdsFromBook(bookUid.toString());
      setAds(newAds);
      console.log(newAds);
    };
    getAds();
  }, [bookUid]);

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
      <EditAdModal ad={fakeAd} />
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

      {ads && ads.map((ad) => <AdAccordion ad={ad} />)}
    </Container>
  );
}
export default BookDetailViewAds;
