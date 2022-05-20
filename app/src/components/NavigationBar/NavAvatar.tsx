import { useLocation, useNavigate } from 'react-router-dom';
import {
  IconButton,
  Button,
  Tooltip,
  Box,
  Avatar,
  Menu,
  Typography,
  MenuItem,
  Stack,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../../hooks/FBAuthProvider';
import UserService from '../../services/UserService';
import { FSUser } from '../../services/FSUser';

export default function NavAvatar() {
  const [user, setUser] = useState<FSUser | undefined>(undefined);
  const navigate = useNavigate();
  const location = useLocation();
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null,
  );

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const auth = useAuth();

  const goToLink = (link: string) => {
    navigate(`/${link}`, { replace: true });
    handleCloseUserMenu();
  };

  const logoutUser = () => {
    auth.signout();
    handleCloseUserMenu();
  };

  useEffect(() => {
    const getUser = async () => {
      if (!auth.loading && auth.user) {
        const newUser = await UserService.getUser(auth.user.uid);
        setUser(newUser);
      }
    };
    getUser();
  }, [auth]); // Rerun if any of these values change
  if (auth.user) {
    return (
      <Box width="120px" sx={{ flexGrow: 0 }} marginLeft="10px">
        <Tooltip title="Öppna kontoinställningar">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar alt={user?.firstName} src="../assets/images/bok.png" />
              <Typography sx={{ color: 'white' }} fontWeight="bold">
                {user?.firstName}
              </Typography>
            </Stack>
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          <MenuItem
            key="profile"
            onClick={() => {
              goToLink('account');
            }}
          >
            <Typography textAlign="center">Profil</Typography>
          </MenuItem>
          <MenuItem
            key="ads"
            onClick={() => {
              goToLink('account/ads');
            }}
          >
            <Typography textAlign="center">Mina annonser</Typography>
          </MenuItem>
          <MenuItem key="logoutUser" onClick={logoutUser}>
            <Typography textAlign="center">Logga ut</Typography>
          </MenuItem>
        </Menu>
      </Box>
    );
  }

  return (
    <Box width="120px">
      {/* REGISTRATIONS BUTTON */}

      {/* LOGIN BUTTON */}
      <Button
        color="primary"
        variant="contained"
        size="large"
        onClick={() =>
          navigate('/login', { replace: true, state: { from: location } })
        }
      >
        Logga in
      </Button>
    </Box>
  );
}
