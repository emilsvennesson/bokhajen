import { Box, Stack, Typography } from '@mui/material';
import sadshark from '../../assets/images/sadshark.png';

export default function NoAds() {
  return (
    <Stack direction="column" alignItems="center" spacing={2}>
      <Box component="img" width="200px" src={sadshark} />
      <Typography>
        Det finns inga annonser att visa i denna kategorin.
      </Typography>
    </Stack>
  );
}
