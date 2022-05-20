import { Book } from 'cremona';
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
import AdCardSkeleton from './AdCardSkeleton';
import CremonaService from '../../services/CremonaService';

interface Props {
  ad: Advert;
  onChange: () => void;
}

export default function AdCard({ ad, onChange }: Props) {
  const [book, setBook] = useState<Book | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const getBook = async () => {
      setLoading(true);
      let cBook: Book;
      try {
        cBook = await CremonaService.getBook(parseInt(ad?.bookId, 10));
        setBook(cBook);
      } catch (e) {
        // do some cringe
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
        <Card variant="outlined" sx={{ height: '135px' }}>
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
                  <Typography>
                    {ad.createdAt.toISOString().split('T')[0]}
                  </Typography>
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
  return <AdCardSkeleton />;
}
