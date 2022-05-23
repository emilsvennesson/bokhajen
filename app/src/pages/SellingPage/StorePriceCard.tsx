import React from 'react';
import { Box, Card, Stack, Typography } from '@mui/material';

interface Props {
  price: number;
}

export default function StorePriceCard({ price }: Props) {
  return (
    <Card>
      <Stack direction="row" alignItems="center" spacing="20px" padding={2}>
        <Box
          component="img"
          width="90px"
          src="https://shop.textalk.se/shop/22777/files/Logotyper/Logga%20vit%20botten.png?max-width=600&max-height=120&quality=85"
        />
        <Typography variant="h5" fontWeight="bold">
          Chalmers Store
        </Typography>
        <Box display="flex">
          <Typography variant="h5">{price}</Typography>
          <Typography variant="h5">:-</Typography>
        </Box>
      </Stack>
    </Card>
  );
}
