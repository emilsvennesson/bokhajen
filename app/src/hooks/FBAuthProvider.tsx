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
  signin: (email: string, password: string) => void;
  signout: () => void;
  signup: (email: string, password: string) => void;
}

const AuthContext = React.createContext<AuthContextType>(null!);

interface Props {
  children: React.ReactNode;
}

export function FBAuthProvider({ children }: Props) {
  const [user, setUser] = React.useState<User | null>(null);

  const signin = async (email: string, password: string) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (e) {
      throw e as Error;
    }
  };

  const signup = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (e) {
      throw e as Error;
    }
    await signin(email, password);
  };

  const signout = async () => {
    try {
      await signOut(auth);
    } catch (e) {
      throw e as Error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
      } else {
        setUser(null);
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // kinda sus
  // TEMP SOLUTION
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = useMemo(() => ({ user, signin, signout, signup }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
