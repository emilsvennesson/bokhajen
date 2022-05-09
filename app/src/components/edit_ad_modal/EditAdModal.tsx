import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React from 'react';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import CircleIcon from '@mui/icons-material/Circle';
import { Advert } from '../../services/Advert';

interface Props {
  ad: Advert;
}

export default function EditAdModal({ ad }: Props) {
  const [adPrice, setAdPrice] = React.useState<number>(ad.price);
  const [condition, setCondition] = React.useState(ad.condition);
  const [conditionDescription, setConditionDescription] = React.useState(
    ad.conditionDescription,
  );
  const [adStatus, setAdStatus] = React.useState(ad.status);

  const adChanged =
    adPrice !== ad.price ||
    condition !== ad.condition ||
    adStatus !== ad.status ||
    conditionDescription !== ad.conditionDescription;

  const getSwedishAdStatus = (status: 'available' | 'reserved' | 'sold') => {
    switch (status) {
      case 'available':
        return 'Tillgänglig';
      case 'reserved':
        return 'Reserverad';
      case 'sold':
        return 'Såld';
      default:
        return '';
    }
  };

  const getStatusColor = (status: 'available' | 'reserved' | 'sold') => {
    switch (status) {
      case 'available':
        return '#00C853';
      case 'reserved':
        return '#FF9800';
      case 'sold':
        return '#F44336';
      default:
        return '';
    }
  };

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    if (Number.isNaN(parseInt(e.target.value, 10)) && e.target.value !== '') {
      setAdPrice(adPrice);
    } else if (e.target.value === '') {
      setAdPrice(0);
    } else {
      setAdPrice(parseInt(e.target.value, 10));
    }
  };

  return (
    <Modal open sx={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        component="main"
        sx={{
          position: 'relative',
          top: '50px',
          width: 900,
          bgcolor: 'background.paper',
          border: '2px solid #FFF',
          boxShadow: 24,
          p: 4,
          minHeight: '300px',
          borderRadius: 2,
          maxHeight: 'calc(100vh - 200px)',
          overflowY: 'hidden',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Box sx={{ p: 1, width: '100%' }}>
              {/* Ad Preview */}
              <Box sx={{ mb: 3 }}>
                <Stack spacing={1}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Avatar
                        alt="Doktor Mugg"
                        src="../assets/images/bok.png"
                        sx={{ mr: 1 }}
                      />
                      <Typography variant="h6">Doktor Mugg</Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ fontStyle: 'italic', mr: 1 }}>
                        {getSwedishAdStatus(ad.status)}
                      </Typography>
                      <CircleIcon sx={{ color: getStatusColor(ad.status) }} />
                    </Box>
                  </Box>
                  <Typography variant="body1">{ad.price} kr</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <MenuBookTwoToneIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">{ad.condition}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex' }}>
                    <ChatBubbleTwoToneIcon sx={{ mr: 1 }} />
                    <Typography variant="body1">
                      {ad.conditionDescription}
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              {/* Edit form */}
              <Divider textAlign="left" />
              <Box
                component="form"
                onSubmit={() => console.log('handle submit')}
                noValidate
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="ad-status-select-label">
                        Annonsstatus
                      </InputLabel>
                      <Select
                        labelId="ad-status-select-label"
                        id="ad-status-select"
                        value={adStatus}
                        label="Annonsstatus"
                        onChange={(e) => setAdStatus(e.target.value as any)}
                        startAdornment={
                          <InputAdornment position="start">
                            <CircleIcon
                              sx={{ color: getStatusColor(adStatus) }}
                            />
                          </InputAdornment>
                        }
                      >
                        <MenuItem value="available">Tillgänglig</MenuItem>
                        <MenuItem value="reserved">Reserverad</MenuItem>
                        <MenuItem value="sold">Såld</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="ad_price"
                      label="Pris"
                      name="ad_price"
                      value={adPrice || ''}
                      placeholder={ad.price.toString()}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      onChange={handlePriceChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Typography>SEK</Typography>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl fullWidth>
                      <InputLabel id="book-condition-select-label">
                        Bokskick
                      </InputLabel>
                      <Select
                        labelId="book-condition-select-label"
                        id="book-condition-select"
                        value={condition}
                        label="Bokskick "
                        onChange={(e) => setCondition(e.target.value as any)}
                        startAdornment={
                          <InputAdornment position="start">
                            <MenuBookTwoToneIcon />
                          </InputAdornment>
                        }
                      >
                        {/* TOOD: use condition enum? */}
                        <MenuItem value="torn">Helt knas förstörd</MenuItem>
                        <MenuItem value="good">Bra/Normal</MenuItem>
                        <MenuItem value="new">Nyskick</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="condition_description"
                      label="Beskrivning av bokskick"
                      name="condition_description"
                      multiline
                      rows={4}
                      onChange={(e) => setConditionDescription(e.target.value)}
                    >
                      {conditionDescription}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                      <Button variant="text" color="error">
                        Radera Annons
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={!adChanged}
                      >
                        Spara ändringar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Modal>
  );
}
