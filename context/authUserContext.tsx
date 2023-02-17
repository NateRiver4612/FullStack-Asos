import { Auth, UserCredential } from "firebase/auth";
import { createContext, useContext, ReactNode } from "react";
import useFirebaseAuth from "../utils/useFirebaseAuth";
import { formatUser } from "../utils/useFirebaseAuth";

type authContextType = {
  authUser: formatUser;
  loading: boolean;
  SignInWithGooglePopup: () => Promise<UserCredential | void | any>;
  SignInWithEmailAndPassword: (
    email: string,
    password: string
  ) => Promise<UserCredential | void | any>;
  SignUpWithEmailAndPassword: (
    name: string,
    email: string,
    password: string
  ) => Promise<UserCredential | void | any>;
  SignOut: () => Promise<void>;
};

const authContextDefaultValues: authContextType = {
  authUser: {
    name: "",
    email: "",
    photo: "",
    id: "",
  },
  loading: true,
  SignInWithGooglePopup: async () => Promise<UserCredential>,
  SignInWithEmailAndPassword: async (email, password) =>
    Promise<UserCredential>,
  SignUpWithEmailAndPassword: async (name, email, password) =>
    Promise<UserCredential>,
  SignOut: async (): Promise<void> => {},
};

const AuthUserContext = createContext<authContextType>(
  authContextDefaultValues
);

type Props = {
  children: ReactNode;
};

export function AuthUserContextProvider({ children }: Props) {
  const value = useFirebaseAuth();

  return (
    <AuthUserContext.Provider value={value}>
      {children}
    </AuthUserContext.Provider>
  );
}

export const useAuth = () => useContext(AuthUserContext);
