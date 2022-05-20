import React, { useEffect } from 'react';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  User,
  signOut,
  onAuthStateChanged,
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword as updatePasswordFirebase,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase/config';
import UserService from '../services/UserService';

initializeApp(firebaseConfig);

const auth = getAuth();

interface AuthContextType {
  user: User | null;
  signin: (email: string, password: string) => Promise<void>;
  signout: () => Promise<void>;
  signup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => Promise<void>;
  loading: boolean;
  updatePassword: (
    email: string,
    password: string,
    newPassword: string,
  ) => Promise<boolean>;
}

const AuthContext = React.createContext<AuthContextType>(null!);

interface Props {
  children: React.ReactNode;
}

export function FBAuthProvider({ children }: Props) {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  const signin = async (email: string, password: string) => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      setUser(userCred.user);
    } catch (e) {
      setLoading(false);
      throw e as Error;
    }
    setLoading(false);
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
  ) => {
    try {
      const { user: usr } = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      UserService.addUser({ uid: usr.uid, email, firstName, lastName });
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
      setUser(null);
    } catch (e) {
      throw e as Error;
    }
    setLoading(false);
  };

  const updatePassword = async (
    email: string,
    password: string,
    newPassword: string,
  ): Promise<boolean> => {
    if (!user) return false;
    const credentials = EmailAuthProvider.credential(email, password);

    try {
      await reauthenticateWithCredential(user, credentials);
    } catch (e) {
      console.error(e);
      return false;
    }

    try {
      await updatePasswordFirebase(user, newPassword);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (usr) => {
      setUser(usr);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = { user, signin, signout, signup, loading, updatePassword };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider');
  }
  return context;
}
