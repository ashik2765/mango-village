import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const Auth = getAuth();
export default function AuthProvider({ children }) {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(false);

    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(Auth, googleProvider);
    }

    const authInfo = { Auth, googleSignIn };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
