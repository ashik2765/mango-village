import { getAuth } from "firebase/auth"
import { createContext } from "react";

const Auth = getAuth();
export default function AuthProvider({children}) {
    const AuthContext = createContext();
    const authInfo = { Auth }
    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    )
}
