import { Book, CremonaClient } from 'cremona';
import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Advert } from '../../services/Advert';
import BasicBookInformation from '../../components/BasicBookInformation';

interface Props {
  ad?: Advert;
}

const client = new CremonaClient();

export default function AccountAdsCard({ ad }: Props) {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      let cBooks: Book[] = [];
      try {
        if (ad) cBooks = await client.getBook(parseInt(ad?.bookId, 10));
        // eslint-disable-next-line no-empty
      } catch (e) {}
      if (cBooks[0]) {
        setBook(cBooks[0]);
      }
      setLoading(false);
    };
    getBook();
  }, [ad]);
  return (
    <Box sx={{ marginBottom: 1 }}>
      <Card variant="outlined">
        <CardContent sx={{ pb: 0, '&:last-child': { pb: 0 } }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            {!loading && book && <BasicBookInformation book={book} />}
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Box>
                <Typography>2022-05-13</Typography>
              </Box>
              <Box>
                {ad && (
                  <Typography style={{ fontWeight: 'bold' }}>
                    {ad.price} kr
                  </Typography>
                )}
              </Box>
            </Box>
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="text" size="small">
            Gå till bok
          </Button>
          <Button variant="text" size="small">
            Redigera annons
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
