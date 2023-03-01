import React, { useState, createContext } from "react"
import { loginRequest } from "./authentication.service";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState([]);

    const onLogin = (email, password) => {
        setIsLoading(true)
        // loginRequest(email, password)
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((u) => {
                setUser(u.user);
                setIsLoading(false)
            })
            .catch((e) => {
                setIsLoading(false)
                setError(e.message)
                const errorCode = e.code;
                const errorMessage = e.message;
            })
    }

    const onRegister = (email, password, repeatedPassword) => {

        if (password !== repeatedPassword) {
            setError("Error : Password do not match")
            return;
        }

        setIsLoading(true)
        // loginRequest(email, password)
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((u) => {
            setUser(u.user);
            setIsLoading(false)
        })
            .catch((e) => {
                setIsLoading(false)
                setError(e.message)
                const errorCode = e.code;
                const errorMessage = e.message;
            })
    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}


