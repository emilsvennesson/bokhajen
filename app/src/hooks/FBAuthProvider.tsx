import React, { useEffect, useMemo } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/config';

initializeApp(firebaseConfig);

const auth = getAuth();

interface AuthContextType {
  user: User | null;
  signin: (email: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
  loading: boolean;
}

const AuthContext = React.createContext<AuthContextType>(null!);

interface Props {
  children: React.ReactNode;
}

export function FBAuthProvider({ children }: Props) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  const signin = async (email: string, password: string) => {
    setLoading(true);
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (e) {
      throw e as Error;
    }
    setLoading(false);
  };

  const signup = async (email: string, password: string) => {
    setLoading(true);
    try {
      const { user: usr } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      setUser(usr);
    } catch (e) {
      throw e as Error;
    }
    setLoading(false);
  };

  const signout = async () => {
    setLoading(true);
    try {
      await signOut(auth);
    } catch (e) {
      throw e as Error;
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
    });
    setLoading(false);

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // kinda sus
  // TEMP SOLUTION
  const value = useMemo(
    () => ({ user, signin, signout, signup, loading }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
