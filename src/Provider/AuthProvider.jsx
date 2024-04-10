import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.init";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const createUser =(email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const AuthInfo ={
        user,
        createUser
    }
    return (
       <AuthContext.Provider value={AuthInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;