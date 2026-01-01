import React, { Children } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../../Firebase/firebase.confiq";

const AuthProvider = ({ children }) => {
  const registerUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    signInWithEmailAndPassword(auth, email, password);
  };
  const logOutUser = () =>{
    signOut(auth)
  }

  const authInfo = {
    registerUser,
    loginUser,
    logOutUser
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
