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
} from "firebase/auth";
import { app } from "./firebase.util";

const formateAuthUser = (user) => ({
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

  const authStateChagne = async (authState) => {
    if (authState) {
      setLoading(true);

      setAuthUser(formateAuthUser(authState));

      setLoading(false);

      console.log(authUser);
    } else {
      setLoading(false);
    }
  };

  const SignInWithGooglePopup = async () => signInWithPopup(auth, provider);

  const SignInWithEmailAndPassword = async (email: string, password: string) =>
    signInWithEmailAndPassword(auth, email, password);

  const SignUpWithEmailAndPassword = async (name, email, password) =>
    createUserWithEmailAndPassword(auth, email, password).then(() => {
      return updateProfile(auth.currentUser, { displayName: name });
    });

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
  };
};

export default useFirebaseAuth;
