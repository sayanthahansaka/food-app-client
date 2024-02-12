import React, { useEffect } from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // signup with gmail

    const sigUpWithGmail = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // login email and password
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Logout
    const logOut = () => {
        signOut(auth)
    }

    // update profile
    const updateUserProfile = ({ name, photoURL }) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }

    // Check signed in user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser);
              setLoading(false);
            } else {
              // User is signed out
              // ...
            }
          })
          return () => {
            return unsubscribe();
          }
    }, [])

    const authInfo = {
        user,
        createUser,
        sigUpWithGmail,
        login,
        logOut,
        updateUserProfile,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider