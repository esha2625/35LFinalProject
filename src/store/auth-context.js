import React, { useContext, useState, useEffect } from 'react';
import {auth} from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth()
{
    return useContext(AuthContext);
}

export function AuthProvider({children})
{
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function signup (username, password)
    {
        return createUserWithEmailAndPassword(auth, username, password)
    }

    function login(username, password)
    {
        return signInWithEmailAndPassword(auth, username, password)
    }

    function logout ()
    {
        return signOut();
    }

    useEffect(() =>{
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout
    }
    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}