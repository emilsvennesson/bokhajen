import {
  Container,
  Accordion,
  AccordionSummary,
  Avatar,
  Stack,
  Typography,
  AccordionDetails,
  Box,
  Divider,
  Button,
} from '@mui/material';
import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ContactPageRoundedIcon from '@mui/icons-material/ContactPageRounded';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import { mainTheme } from '../theme';
import { Advert } from '../services/Advert';
import { useAuth } from '../hooks/FBAuthProvider';
import EditAdModal from './edit_ad_modal/EditAdModal';

interface Props {
  ad: Advert;
  onChangesSaved: () => void;
  onAdDelete: () => void;
}

export default function AdAccordion({ ad, onChangesSaved, onAdDelete }: Props) {
  const { user } = useAuth();
  const [expanded, setExpanded] = useState(false);
  const [editMode, setEditMode] = useState(false);

  const canEdit = ad.user.uid === user?.uid;

  return (
    <Container key={ad.uid} sx={{ mb: 1 }}>
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
                sx={{ margin: 'auto' }}
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
                    setExpanded(false);
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
            <Box sx={{ display: 'flex', flex: 5 }}>
              <Stack direction="column">
                <Stack direction="row">
                  <MenuBookTwoToneIcon sx={{ marginRight: 1 }} />
                  <Typography>{ad.condition}</Typography>
                </Stack>
                <Stack direction="row" sx={{ marginTop: 1 }}>
                  <ChatBubbleTwoToneIcon sx={{ marginRight: 1 }} />
                  <Typography>{ad.conditionDescription}</Typography>
                </Stack>
              </Stack>
            </Box>
            <Divider sx={{ margin: 1 }} />
            <Box
              sx={{
                display: 'flex',
                flex: 3,
                border: 0,
                justifyContent: 'center',
                margin: 'auto',
                marginBottom: 0,
                marginTop: 1,
              }}
            >
              <Button
                variant="contained"
                startIcon={<ContactPageRoundedIcon />}
              >
                Kontakta säljaren
              </Button>
            </Box>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
}
