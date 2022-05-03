import { Box, CardActionArea, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Book } from 'cremona';
import { mainTheme } from '../../theme';

interface CardProps {
  book: Book;
}

export default function BookCard({ book }: CardProps) {
  return (
    <Card sx={{ maxWidth: '200px' }}>
      <CardActionArea
        sx={{ '&:hover': { color: mainTheme.palette.secondary.main } }}
      >
        <CardMedia
          component="img"
          height="250"
          image={book.image}
          alt="book image"
        />
        <CardContent>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            component="div"
            overflow="hidden"
            whiteSpace="pre-line"
            textOverflow="ellipsis"
            height={50}
            textAlign="center"
          >
            <Typography
              sx={{
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                display: '-webkit-box',
                WebkitLineClamp: '2',
                WebkitBoxOrient: 'vertical',
                fontWeight: 'light',
              }}
            >
              {book.name}
            </Typography>
          </Box>
          <Typography component="div">
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ fontWeight: 'bold' }}
            >
              {`${book.price} kr`}
            </Box>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
