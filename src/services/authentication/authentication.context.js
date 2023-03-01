import React, { useState, createContext } from "react"
import { loginRequest } from "./authentication.service";
import { getAuth, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState(null);
    const [error, setError] = useState([]);

    const auth = getAuth();
    onAuthStateChanged(auth, (usr) => {
        if (usr) {
            setUser(usr)
            setIsLoading(false)
        } else {
            setIsLoading(false)
        }
    });

    const onLogin = (email, password) => {
        setIsLoading(true)
        // loginRequest(email, password)
        // const auth = getAuth();
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
        // const auth = getAuth();
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

    const onLogout = () => {
        setUser(null);

        // const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });

    }

    return (
        <AuthenticationContext.Provider
            value={{
                isAuthenticated: !!user,
                user,
                isLoading,
                error,
                onLogin,
                onRegister,
                onLogout
            }}
        >
            {children}
        </AuthenticationContext.Provider>
    )
}


