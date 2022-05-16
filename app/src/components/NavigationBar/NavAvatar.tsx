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
import React from 'react';
import { useAuth } from '../../hooks/FBAuthProvider';

export default function NavAvatar() {
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

  const goToAccount = () => {
    navigate('/account', { replace: true });
  };

  const logoutUser = () => {
    auth.signout();
    handleCloseUserMenu();
  };
  if (auth.user)
    return (
      <Box width="120px" sx={{ flexGrow: 0 }} marginLeft="10px">
        <Tooltip title="Open account settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Avatar alt="D" src="../assets/images/bok.png" />
              <Typography sx={{ color: 'white' }} fontWeight="bold">
                Daniel
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
          <MenuItem key="profile" onClick={goToAccount}>
            <Typography textAlign="center">Profile</Typography>
          </MenuItem>
          <MenuItem key="logoutUser" onClick={logoutUser}>
            <Typography textAlign="center">Logout</Typography>
          </MenuItem>
        </Menu>
      </Box>
    );

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
