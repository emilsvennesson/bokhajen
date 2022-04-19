import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, Tooltip } from '@mui/material';
import bok from '../assets/images/bok.png';
import { mainTheme } from '../theme';

function Cards() {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores libero molestiae consequuntur fuga magni ab. Facilis corporis magni sapiente vel.';
  return (
    <div>
      <Card>
        <CardActionArea
          sx={{ '&:hover': { color: mainTheme.palette.secondary.main } }}
        >
          <CardMedia
            sx={{
              marginLeft: '5%',
              marginTop: '5%',
              width: '90%',
              height: '100%',
              paddingTop: 5,
              paddingBottom: 5,
            }}
            component="img"
            image={bok}
            alt="cardImg"
          />
          <Tooltip title={text} enterDelay={600}>
            <CardContent>
              <Typography
                sx={{
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  display: '-webkit-box',
                  WebkitLineClamp: '2',
                  WebkitBoxOrient: 'vertical',
                }}
                gutterBottom
                variant="h6"
                component="div"
              >
                {text}
              </Typography>
            </CardContent>
          </Tooltip>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default Cards;
