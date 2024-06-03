import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react";
import { app } from "./firebase.cofig";

export const AuthContext = createContext(null);
const Auth = getAuth(app);

export default function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(Auth, googleProvider);
    };
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(Auth, email, password)
    };
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(Auth, email, password)
    };
    const logOut = () => {
        setLoading(true)
        return signOut(Auth)
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser)
            }
            return () => {
                return unsubscribe();
            }
        })
    }, []);

    const authInfo = { Auth, googleSignIn, createUser, logIn, logOut, user,loading };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
