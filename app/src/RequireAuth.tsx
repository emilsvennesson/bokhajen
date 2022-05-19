import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
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
  const location = useLocation();

  if (auth.loading) return <OverlayCircularProgress />;
  if (loggedIn && !auth.user) {
    return <Navigate to={to} state={{ from: location }} replace />;
  }
  if (!loggedIn && auth.user) {
    return <Navigate to={to} state={{ from: location }} replace />;
  }

  return children;
}
