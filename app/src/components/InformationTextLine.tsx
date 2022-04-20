import { Typography } from '@mui/material';
import React from 'react';

type Props = {
  children: String;
};

export default function InformationTextLine({ children }: Props) {
  return <Typography>{children}</Typography>;
}
