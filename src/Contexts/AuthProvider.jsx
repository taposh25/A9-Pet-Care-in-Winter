
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // const signInWithGoogle = () => {
  //   setLoading(true);
  //   return signInWithPopup(auth, GoogleAuthProvider);
  // };


  const signInWithGoogle = () => {
  setLoading(true);
  const googleProvider = new GoogleAuthProvider();
  return signInWithPopup(auth, googleProvider);
};


  const logOut = () => {
    return signOut(auth);
  };

  const updateUserProfile = (profile) => {
    if (auth.currentUser) {
      return updateProfile(auth.currentUser, profile);
    }
    return Promise.reject("No user");
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    logOut,
    updateUserProfile,
    resetPassword,
  };

  return <AuthContext.Provider value={value}>
    {children}
    </AuthContext.Provider>;
};

export default AuthProvider;
