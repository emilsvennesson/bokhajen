import { Button } from '@mui/material';
import React, { useState } from 'react';
import AdService, { Ad } from '../services/AdService';

export default function CreateAd() {
  const [ad] = useState<Ad>({
    adDescription: 'i love pelle',
    adPrice: 420,
    authors: ['Pelle'],
    bookDescription: 'i love pelle description book',
    bookName: '',
    courseCodes: [],
    tags: [],
    publishDate: new Date(),
    wear: 0,
    isbn: 0,
  });

  const submitAd = () => {
    AdService.addAd(ad).then((res) => {
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
