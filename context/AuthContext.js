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
        createUserWithEmailAndPassword(auth,email,password);
        return
    }

    const login = (email,password) => {
        signInWithEmailAndPassword(auth,email,password);
        return 
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
