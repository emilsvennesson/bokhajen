import React from 'react';
import { useNavigate } from 'react-router-dom';
import OverlayCircularProgress from './components/OverlayCircularProgress';
import { useAuth } from './hooks/FBAuthProvider';

interface Props {
  children: JSX.Element;
  loggedIn?: boolean;
  to?: string;
}

export default function RequireAuth({
  children,
  loggedIn = true,
  to = '/',
}: Props) {
  const auth = useAuth();
  const navigate = useNavigate();

  if (auth.loading) return <OverlayCircularProgress />;
  if (loggedIn && !auth.user) {
    navigate(to, { replace: true });
    return <OverlayCircularProgress />;
  }
  if (!loggedIn && auth.user) {
    navigate(to, { replace: true });
    return <OverlayCircularProgress />;
  }

  return children;
}
