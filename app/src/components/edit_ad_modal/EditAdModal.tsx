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
  Tooltip,
  CircularProgress,
} from '@mui/material';
import React, { useState } from 'react';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import ChatBubbleTwoToneIcon from '@mui/icons-material/ChatBubbleTwoTone';
import CircleIcon from '@mui/icons-material/Circle';
import { AdStatus, Advert } from '../../services/Advert';
import {
  BookCondition,
  getBookConditionDescription,
} from '../../config/BookCondition';
import { getStatusColor } from '../../config/StatusColor';
import AdService from '../../services/AdService';

interface Props {
  ad: Advert;
  onChangesSaved: (changesSucceded: boolean) => void;
  open?: boolean;
  onClose?:
    | ((event: {}, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;
  onAdDelete: () => void;
}

export default function EditAdModal({
  ad,
  onChangesSaved,
  open,
  onClose,
  onAdDelete,
}: Props) {
  const [adPrice, setAdPrice] = useState<number>(ad.price);
  const [condition, setCondition] = useState(ad.condition);
  const [conditionDescription, setConditionDescription] = useState(
    ad.conditionDescription,
  );
  const [adStatus, setAdStatus] = useState(ad.status);
  const [submitLoading, setSubmitLoading] = useState(false);

  const adChanged =
    adPrice !== ad.price ||
    condition !== ad.condition ||
    adStatus !== ad.status ||
    conditionDescription !== ad.conditionDescription;

  const handleSubmit = async () => {
    // TODO: Handle errors
    const uploadChanges = async () => {
      let succeded = false;
      if (condition !== ad.condition) {
        const { success: adConditionSuccess } = await AdService.editAdCondition(
          ad.uid,
          condition,
        );
        succeded = adConditionSuccess;
      }

      if (adPrice !== ad.price) {
        const { success: adPriceSuccess } = await AdService.editAdPrice(
          ad.uid,
          adPrice,
        );
        succeded = adPriceSuccess;
      }

      if (conditionDescription !== ad.conditionDescription) {
        const { success: adConditionDescriptionSuccess } =
          await AdService.editAdConditionDescription(
            ad.uid,
            conditionDescription,
          );
        succeded = adConditionDescriptionSuccess;
      }

      if (adStatus !== ad.status) {
        const { success: adStatusSuccess } = await AdService.editAdStatus(
          ad.uid,
          adStatus,
        );
        succeded = adStatusSuccess;
      }

      return succeded;
    };
    setSubmitLoading(true);
    const changesSucceded = await uploadChanges();
    onChangesSaved(changesSucceded);
    setSubmitLoading(false);
    if (onClose) onClose({}, 'backdropClick');
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

  const handleDeleteAd = async () => {
    const { success: deleted } = await AdService.removeAd(ad.uid);
    if (!deleted) {
      return;
    }
    if (onClose) {
      onClose({}, 'escapeKeyDown');
    }
    onAdDelete();
  };

  return (
    <Modal
      open={open || false}
      onClose={onClose}
      sx={{ display: 'flex', justifyContent: 'center' }}
    >
      <Box
        component="main"
        sx={{
          position: 'relative',
          top: '50px',
          width: 500,
          bgcolor: 'background.paper',
          border: '2px solid #FFF',
          boxShadow: 24,
          p: 4,
          minHeight: '300px',
          borderRadius: 2,
          height: 'min-content',
          maxHeight: 'calc(100vh - 150px)',
          overflowY: 'auto',
        }}
      >
        <Grid container spacing={1}>
          <Grid item xs={12}>
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
                        alt={ad.user.firstName + ad.user.lastName}
                        src="../assets/images/bok.png"
                        sx={{ mr: 1 }}
                      />
                      <Typography variant="h6">
                        {ad.user.firstName} {ad.user.lastName}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex' }}>
                      <Typography sx={{ fontStyle: 'italic', mr: 1 }}>
                        {ad.status}
                      </Typography>
                      <CircleIcon sx={{ color: getStatusColor(ad.status) }} />
                    </Box>
                  </Box>
                  <Typography variant="body1">{ad.price} kr</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Tooltip title={getBookConditionDescription(ad.condition)}>
                      <Box sx={{ display: 'flex' }}>
                        <MenuBookTwoToneIcon sx={{ mr: 1 }} />
                        <Typography variant="body1">{ad.condition}</Typography>
                      </Box>
                    </Tooltip>
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
              <Divider />
              <Box
                component="form"
                onSubmit={() => console.log('handle submit')}
                noValidate
                sx={{ mt: 3, position: 'relative' }}
              >
                {submitLoading && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                      }}
                    >
                      <CircularProgress />
                    </Box>
                  </Box>
                )}
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
                        <MenuItem value={AdStatus.AVAILABLE}>
                          {AdStatus.AVAILABLE}
                        </MenuItem>
                        <MenuItem value={AdStatus.RESERVED}>
                          {AdStatus.RESERVED}
                        </MenuItem>
                        <MenuItem value={AdStatus.SOLD}>
                          {AdStatus.SOLD}
                        </MenuItem>
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
                  <Grid
                    item
                    xs={12}
                    sx={{ display: 'flex', alignItems: 'center' }}
                  >
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
                        <MenuItem value={BookCondition.EXCELLENT}>
                          {BookCondition.EXCELLENT}
                        </MenuItem>
                        <MenuItem value={BookCondition.GOOD}>
                          {BookCondition.GOOD}
                        </MenuItem>
                        <MenuItem value={BookCondition.BAD}>
                          {BookCondition.BAD}
                        </MenuItem>
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
                      value={conditionDescription}
                      lang="sv"
                      onChange={(e) => setConditionDescription(e.target.value)}
                    >
                      {conditionDescription}
                    </TextField>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                      <Button
                        variant="text"
                        color="error"
                        onClick={handleDeleteAd}
                      >
                        Radera Annons
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={!adChanged || submitLoading}
                        onClick={handleSubmit}
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
