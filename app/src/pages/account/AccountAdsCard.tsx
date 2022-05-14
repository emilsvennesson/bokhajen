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
import { Link } from 'react-router-dom';
import { Advert } from '../../services/Advert';
import BasicBookInformation from '../../components/BasicBookInformation';
import EditAdModal from '../../components/edit_ad_modal/EditAdModal';

interface Props {
  ad: Advert;
  onChange: () => void;
}

const client = new CremonaClient();

export default function AccountAdsCard({ ad, onChange }: Props) {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditMode] = useState(false);

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

  if (!loading && book) {
    return (
      <Box sx={{ marginBottom: 1 }}>
        {editMode && (
          <EditAdModal
            ad={ad}
            onChangesSaved={onChange}
            open
            onClose={() => setEditMode(false)}
            onAdDelete={onChange}
          />
        )}
        <Card variant="outlined">
          <CardContent sx={{ pb: 0, '&:last-child': { pb: 0 } }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <BasicBookInformation book={book} />
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
            <Button
              component={Link}
              to={`../../books/${book.uid}`}
              variant="text"
              size="small"
            >
              Gå till bok
            </Button>
            <Button
              variant="text"
              size="small"
              onClick={() => {
                setEditMode(true);
              }}
            >
              Redigera annons
            </Button>
          </CardActions>
        </Card>
      </Box>
    );
  }
  return <div />;
}
