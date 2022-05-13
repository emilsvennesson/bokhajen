import React from 'react';
import { useNavigate } from 'react-router-dom';
import OverlayCircularProgress from './components/OverlayCircularProgress';
import { useAuth } from './hooks/FBAuthProvider';

interface Props {
  children: JSX.Element;
  loggedIn?: boolean;
}

export default function RequireAuth({ children, loggedIn = true }: Props) {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.loading) return <OverlayCircularProgress />;
  if (loggedIn && !auth.user) {
    navigate('/login', { replace: true });
    return <OverlayCircularProgress />;
  }
  if (!loggedIn && auth.user) {
    navigate('/', { replace: true });
    return <OverlayCircularProgress />;
  }

  return children;
}
