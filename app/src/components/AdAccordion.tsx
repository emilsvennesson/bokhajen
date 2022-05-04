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
import Advert from '../services/Advert';

interface Props {
  ad: Advert;
}

export default function AdAccordion({ ad }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Container key={ad.uid}>
      <Accordion
        sx={{
          marginTop: 1,
          '&:hover': {
            bgcolor: mainTheme.palette.secondary.light,
          },
        }}
      >
        <AccordionSummary
          onClick={() => setExpanded(!expanded)}
          expandIcon={<ExpandMoreIcon sx={{ marginLeft: 1 }} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Avatar
            sx={{ margin: 'auto' }}
            alt="Remy Sharp"
            src="../assets/images/bok.png"
          />

          <Stack sx={{ marginLeft: 2 }}>
            <Typography
              variant="h6"
              sx={{ width: '20%', flexShrink: 0, marginBottom: 1 }}
            >
              {ad}
            </Typography>

            <Stack direction="row" spacing={1} sx={{ margin: 'auto' }}>
              {!expanded && (
                <Typography
                  variant="body1"
                  sx={{
                    display: 'flex',
                    justifyContent: 'start',
                    margin: 'auto',
                  }}
                >
                  Condition
                </Typography>
              )}
            </Stack>
          </Stack>

          <Typography
            sx={{
              marginRight: 1,
              display: 'flex',
              justifyContent: 'end',
              flexGrow: 1,
              margin: 'auto',
            }}
          >
            Pris kr
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Stack direction="column">
            <Box sx={{ display: 'flex', flex: 5 }}>
              <Stack direction="column">
                <Stack direction="row">
                  <MenuBookTwoToneIcon sx={{ marginRight: 1 }} />
                  <Typography>Condition</Typography>
                </Stack>
                <Stack direction="row" sx={{ marginTop: 1 }}>
                  <ChatBubbleTwoToneIcon sx={{ marginRight: 1 }} />
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
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
