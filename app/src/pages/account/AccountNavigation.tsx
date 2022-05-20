import { Button, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { createStyles, makeStyles } from '@mui/styles';
import { forwardRef } from 'react';

const MyNavLink = forwardRef<any, any>((props, ref) => (
  <NavLink
    ref={ref}
    to={props.to}
    className={({ isActive }) =>
      `${props.className} ${isActive ? props.activeClassName : ''}`
    }
  >
    {props.children}
  </NavLink>
));

const useStyles = makeStyles(() =>
  createStyles({
    activeLink: {
      fontWeight: 'bold',
      fontSize: '16px',
    },
  }),
);

export default function AccountNavigation() {
  const classes = useStyles();
  return (
    <Stack>
      <Button
        component={MyNavLink}
        to="details"
        size="large"
        activeClassName={classes.activeLink}
      >
        Mina uppgifter
      </Button>
      <Button
        component={MyNavLink}
        to="ads"
        size="large"
        activeClassName={classes.activeLink}
      >
        Mina annonser
      </Button>
    </Stack>
  );
}
