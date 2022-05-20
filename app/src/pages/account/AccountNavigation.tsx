import { Button, Stack } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { forwardRef } from 'react';
import useClasses from '../../hooks/useClasses';

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

const styles = () => ({
  activeLink: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
});

export default function AccountNavigation() {
  const classes = useClasses(styles);

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
