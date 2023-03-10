import React, { useState, useEffect } from "react";
import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  UserCredential,
  signOut,
} from "firebase/auth";
import { app } from "./firebase.util";

export type formatUser = {
  name: string;
  email: string;
  photo: string;
  id: string;
};

const formateAuthUser = (user: {
  displayName: any;
  email: any;
  photoURL: any;
  uid: any;
}): formatUser => ({
  name: user.displayName,
  email: user.email,
  photo: user.photoURL,
  id: user.uid,
});

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  const authStateChagne = async (authState: any) => {
    if (authState) {
      setLoading(true);

      setAuthUser(formateAuthUser(authState));

      setLoading(false);
    } else {
      setAuthUser(null);
      setLoading(false);
    }
  };

  const SignInWithGooglePopup = async () =>
    await signInWithPopup(auth, provider);

  const SignInWithEmailAndPassword = async (email: string, password: string) =>
    await signInWithEmailAndPassword(auth, email, password);

  const SignUpWithEmailAndPassword = async (
    name: string,
    email: string,
    password: string
  ) =>
    await createUserWithEmailAndPassword(auth, email, password).then(() => {
      return updateProfile(auth.currentUser, { displayName: name });
    });

  const SignOut = async () => await signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChagne);

    return () => unsubscribe();
  }, []);

  return {
    authUser,
    loading,
    SignInWithEmailAndPassword,
    SignInWithGooglePopup,
    SignUpWithEmailAndPassword,
    SignOut,
  };
};

export default useFirebaseAuth;
