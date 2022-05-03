import { Link } from 'react-router-dom';
import { IconButton, Button, Tooltip, Box, Avatar, Menu } from '@mui/material';
import { useAuth } from '../../hooks/FBAuthProvider';

export function NavAvatar() {
  const auth = useAuth();
  if (auth.user)
    return (
      <Box sx={{ flexGrow: 0 }}>
        <Tooltip title="Open account settings">
          <IconButton sx={{ p: 0 }}>
            <Avatar alt="Z" src="../assets/images/bok.png" />
          </IconButton>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={false}
        />
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
