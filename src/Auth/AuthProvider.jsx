import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase/firebase.config";
import toast from "react-hot-toast";

export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    // states
    const [User, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false)



    const googleProvider = new GoogleAuthProvider();
    
    function Google() {
        return signInWithPopup(auth, googleProvider)
    }

    const RegisterUser = function (email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const LoginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = function () {
        signOut(auth).then(() => toast.success('Logout Successful')).catch(error => toast.error(error.message))
    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoading(false)
        })
    }, [])





    return (
        <AuthContext.Provider value={{ Google, RegisterUser, updateUser, LoginUser, User, Logout, loading , setRefresh , refresh}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;