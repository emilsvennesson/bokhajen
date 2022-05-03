import { Link } from 'react-router-dom';
import {
  IconButton,
  Button,
  Tooltip,
  Box,
  Avatar,
  Menu,
  Typography,
  MenuItem,
} from '@mui/material';
import React from 'react';
import { useAuth } from '../../hooks/FBAuthProvider';

export default function NavAvatar() {
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

  const logoutUser = () => {
    auth.signout();
    handleCloseUserMenu();
  };
  if (auth.user)
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open account settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Avatar alt="Z" src="../assets/images/bok.png" />
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
          <MenuItem key="profile" onClick={handleCloseUserMenu}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem key="logoutUser" onClick={logoutUser}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    );

  return (
    <Box sx={{ flexGrow: 0 }}>
      {/* REGISTRATIONS BUTTON */}
      <Button
        component={Link}
        to="/signup"
        color="secondary"
        variant="outlined"
        size="large"
      >
        Registrera
      </Button>
      {/* LOGIN BUTTON */}
      <Button
        component={Link}
        to="/login"
        color="secondary"
        variant="text"
        size="large"
      >
        Logga in
      </Button>
    </Box>
  );
}
