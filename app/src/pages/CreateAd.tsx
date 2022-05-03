import { Button } from '@mui/material';
import React, { useState } from 'react';
import AdService, { Ad } from '../services/AdService';

export default function CreateAd() {
  const [ad] = useState<Ad>({
    uid: '11111',
    bookId: '12332',
    price: 300,
    condition: 'new',
    conditionDescribtion: ' just as new',
  });

  const submitAd = () => {
    AdService.publishAd(ad).then((res) => {
      // eslint-disable-next-line no-console
      console.log('ad added', res);
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={submitAd}>
        Commit die
      </Button>
    </div>
  );
}
