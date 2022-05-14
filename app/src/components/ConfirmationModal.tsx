import { Button, Modal, Paper, Stack, Typography } from '@mui/material';
import React from 'react';

interface Props {
  open: boolean;
  title: string;
  text?: string;
  acceptButtonText?: string;
  cancelButtonText?: string;
  onAccept: Function;
  onCancel: Function;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '400px',
};

export default function ComfirmationCard({
  open,
  title,
  text,
  onAccept,
  onCancel,
  children,
  acceptButtonText = 'Accept',
  cancelButtonText = 'Cancel',
}: React.PropsWithChildren<Props>) {
  const formatText = (): any => {
    if (text !== undefined)
      return (
        <Typography textAlign="center" fontSize={15}>
          {text}
        </Typography>
      );

    return undefined;
  };

  return (
    <Modal open={open}>
      <Paper sx={style}>
        <Stack>
          <Typography textAlign="center" fontSize={30} fontWeight="bold">
            {title}
          </Typography>
          {formatText()}
          {children}
          <Stack>
            <Button onClick={() => onAccept()}>{acceptButtonText}</Button>
            <Button onClick={() => onCancel()}>{cancelButtonText}</Button>
          </Stack>
        </Stack>
      </Paper>
    </Modal>
  );
}
