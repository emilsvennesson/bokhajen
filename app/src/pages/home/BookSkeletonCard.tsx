import { Box, Card, CardContent, Skeleton, Stack } from '@mui/material';

const HEIGHT = 300;
const WIDTH = 230;

export default function BookSkeletonCard() {
  return (
    <Card
      sx={{
        maxWidth: WIDTH,
        maxHeight: HEIGHT,
        minHeight: HEIGHT,
      }}
    >
      <Skeleton variant="rectangular" height={200} />
      <CardContent sx={{ height: '80px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Stack alignItems="center" sx={{ width: '100%' }}>
            <Skeleton variant="text" width={160} />
            <Skeleton variant="text" width={100} />
          </Stack>
          <Box>
            <Skeleton variant="text" width={40} />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
