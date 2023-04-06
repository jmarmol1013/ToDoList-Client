import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword,createUserWithEmailAndPassword,signOut,onAuthStateChanged } from "firebase/auth";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({children}){
    const [currentUser,setCurrentUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const userInfo = useRef();

    const singnup = (email,password) => {
        try{
            const signupResult = createUserWithEmailAndPassword(auth,email,password);
            return signupResult
        } catch (error) {
            throw new Error('Could not login. Verify your email and password.');
          }
    }

    const login = (email,password) => {
        try{
            const signinResult = signInWithEmailAndPassword(auth,email,password);
            return signinResult
        } catch (error) {
            throw new Error('Could not login. Verify your email and password.');
          }
    }

    const logout = () =>{
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,async user => {
            setCurrentUser(user);
            setLoading(false)
        });
        return unsubscribe
    },[]);

    const value = {
        currentUser,
        login,
        singnup,
        logout,
        userInfo,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
