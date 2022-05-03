import { Button } from '@mui/material';
import React from 'react';
import { useAuth } from '../hooks/FBAuthProvider';
import AdService, { Ad } from '../services/AdService';

export default function CreateAd() {
  const { user } = useAuth();

  const submitAd = () => {
    if (!user) return;

    const inAd: Ad = {
      uid: user.uid,
      bookId: '1234123123',
      price: 300,
      condition: 'new',
      conditionDescribtion: 'hejsvej',
    };

    AdService.publishAd(inAd).then((res) => {
      // eslint-disable-next-line no-console
      console.log('ad added', res);
    });
  };

  const getAds = () => {
    AdService.getAds().then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div>
      <Button variant="outlined" onClick={submitAd}>
        Commit die
      </Button>
      <Button variant="outlined" onClick={getAds}>
        get die
      </Button>
    </div>
  );
}
