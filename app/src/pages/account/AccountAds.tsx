/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useEffect } from 'react';
import { useAuth } from '../../hooks/FBAuthProvider';
import { AdStatus, Advert } from '../../services/Advert';
import AdService from '../../services/AdService';
import AccountAdsCard from './AccountAdsCard';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AccountAds() {
  const auth = useAuth();
  const [value, setValue] = React.useState(0);
  const [ads, setAds] = React.useState<Advert[] | undefined>(undefined);
  const adStatuses = [AdStatus.AVAILABLE, AdStatus.RESERVED, AdStatus.SOLD];

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const getAds = async () => {
      if (!auth.loading && auth.user) {
        const newAds = await AdService.getAdsFromUser(auth.user.uid);
        setAds(newAds);
      }
    };
    getAds();
  }, [auth]);

  return (
    <Box sx={{ width: '45vw' }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="ads tabs">
              <Tab label="Aktiva annonser" {...a11yProps(0)} />
              <Tab label="Reserverade annonser" {...a11yProps(1)} />
              <Tab label="Sålda annonser" {...a11yProps(2)} />
            </Tabs>
          </Box>
        </Box>
        <Stack>
          {ads &&
            adStatuses.map((status, index) => (
              <Box key={status}>
                <TabPanel value={value} index={index}>
                  {ads
                    ?.filter((ad) => ad.status === status)
                    .map((ad) => (
                      <Box key={ad.uid}>
                        <AccountAdsCard ad={ad} />
                      </Box>
                    ))}
                </TabPanel>
              </Box>
            ))}
        </Stack>
      </Box>
    </Box>
  );
}
