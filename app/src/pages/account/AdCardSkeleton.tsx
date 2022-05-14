import {
  Box,
  Card,
  CardActions,
  CardContent,
  Skeleton,
  Stack,
} from '@mui/material';

export default function AdCardSkeleton() {
  return (
    <Card variant="outlined" sx={{ height: '135px', marginBottom: 1 }}>
      <CardContent sx={{ pb: 0, '&:last-child': { pb: 0 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ height: '100%' }}>
            <Skeleton variant="rectangular" width={60} height={75} />
          </Box>
          <Box marginLeft={2}>
            <Stack>
              <Skeleton variant="text" width={240} />
              <Skeleton variant="text" width={60} />
              <Skeleton variant="text" width={120} />
            </Stack>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              justifyContent: 'flex-end',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}
            >
              <Skeleton variant="text" width={110} />
              <Skeleton variant="text" width={45} />
            </Box>
          </Box>
        </Box>
      </CardContent>
      <CardActions />
    </Card>
  );
}
