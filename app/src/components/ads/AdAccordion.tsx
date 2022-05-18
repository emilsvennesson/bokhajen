import {
  Accordion,
  AccordionSummary,
  Avatar,
  Stack,
  Typography,
  AccordionDetails,
  Box,
  Divider,
  Button,
  Link,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import EmailTwoToneIcon from '@mui/icons-material/EmailTwoTone';
import CallTwoToneIcon from '@mui/icons-material/CallTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import { mainTheme } from '../../theme';
import { Advert } from '../../services/Advert';
import { useAuth } from '../../hooks/FBAuthProvider';
import EditAdModal from '../edit_ad_modal/EditAdModal';

interface Props {
  ad: Advert;
  onChangesSaved: (changesSucceded: boolean) => void;
  onAdDelete: () => void;
}

export default function AdAccordion({ ad, onChangesSaved, onAdDelete }: Props) {
  const { user } = useAuth();
  const [expanded, setExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    setEditMode(false);
  }, [ad]);

  const canEdit = ad.user.uid === user?.uid;

  return (
    <Box key={ad.uid} sx={{ width: '100%' }}>
      {editMode && (
        <EditAdModal
          ad={ad}
          onChangesSaved={onChangesSaved}
          open
          onClose={() => setEditMode(false)}
          onAdDelete={onAdDelete}
        />
      )}
      <Accordion
        sx={{
          '&:hover': {
            bgcolor: mainTheme.palette.secondary.light,
          },
        }}
      >
        <AccordionSummary
          onClick={() => setExpanded(!expanded)}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                alt={ad.user.firstName + ad.user.lastName}
                src="../assets/images/bok.png"
              />

              <Stack sx={{ marginLeft: 2 }}>
                <Typography variant="h6" sx={{ flexShrink: 0 }}>
                  {ad.user.firstName} {ad.user.lastName}
                </Typography>

                {!expanded && (
                  <Typography
                    variant="body1"
                    sx={{
                      display: 'flex',
                      justifyContent: 'start',
                    }}
                  >
                    {ad.condition}
                  </Typography>
                )}
              </Stack>
            </Box>

            <Stack>
              <Typography
                sx={{
                  marginRight: 1,
                  display: 'flex',
                  justifyContent: 'end',
                  flexGrow: 1,
                  alignItems: 'center',
                }}
              >
                {ad.price} kr
              </Typography>
              {canEdit && (
                <Button
                  variant="text"
                  onClick={() => {
                    setEditMode(true);
                  }}
                >
                  Redigera
                </Button>
              )}
            </Stack>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column">
            <Box sx={{ display: 'flex' }}>
              <Stack direction="column" width="100%">
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    width: '100%',
                  }}
                >
                  <Stack direction="row">
                    <MenuBookTwoToneIcon sx={{ marginRight: 1 }} />
                    <Typography>{ad.condition}</Typography>
                  </Stack>
                  <Typography variant="body2">
                    {ad.modifiedAt
                      ? `Uppdaterad ${
                          ad.modifiedAt.toISOString().split('T')[0]
                        }`
                      : `Skapad ${ad.createdAt.toISOString().split('T')[0]}`}
                  </Typography>
                </Box>

                <Stack direction="row" sx={{ marginTop: 1 }}>
                  <ChatBubbleTwoToneIcon sx={{ marginRight: 1 }} />
                  <Typography>{ad.conditionDescription}</Typography>
                </Stack>
              </Stack>
            </Box>
            <Divider sx={{ margin: 1 }} />
            <Typography variant="h6" sx={{ mb: 1 }}>
              Kontaktinformation
            </Typography>

            <Stack>
              <Stack direction="row" spacing={1}>
                <CallTwoToneIcon />
                <Typography sx={{ fontWeight: 'bold' }}>Telefon: </Typography>
                {ad.user.phoneNumber && (
                  <Typography>{ad.user.phoneNumber}</Typography>
                )}
                {!ad.user.phoneNumber && <Typography>-</Typography>}
              </Stack>
              <Stack direction="row" spacing={1}>
                <EmailTwoToneIcon />
                <Typography sx={{ fontWeight: 'bold' }}>E-mail: </Typography>
                <Link component="a" href={`mailto: ${ad.user.email}`}>
                  {ad.user.email}
                </Link>
              </Stack>
            </Stack>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
