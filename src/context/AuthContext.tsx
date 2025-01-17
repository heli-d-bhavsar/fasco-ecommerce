import { GoogleAuthProvider, onAuthStateChanged, User } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { firebaseAuth } from '../firebase/BaseConfig';

export interface AuthContextI {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  googleAuthProvider: GoogleAuthProvider;
}
export const AuthContext = createContext<AuthContextI | null>(null);

interface AuthProviderI {
  children: React.ReactNode;
}
export const AuthProvider: React.FC<AuthProviderI> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const googleAuthProvider = new GoogleAuthProvider();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, googleAuthProvider }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  return useContext(AuthContext) as AuthContextI;
};
