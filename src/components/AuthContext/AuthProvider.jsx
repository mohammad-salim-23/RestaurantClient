import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

import { GoogleAuthProvider } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";
import auth from "../../firebase/firebase.config";
export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();
   const [user,setUser] = useState(null);
   const [loading ,setLoading] = useState(true);
   const createUser = (email,password)=>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password);
}
const signInUser = (email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}
const logOut =()=>{
    setLoading(true);
    return signOut(auth);
}
const googleSignIn= ()=>{
    setLoading(true);
    return signInWithPopup(auth,GoogleProvider);
}
const GithubSignIn = () =>{
    setLoading(true);
    return signInWithPopup(auth,GitHubProvider)
}
useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,currentUser=>{
        if (currentUser) {
            // Update user's display name if it exists
            if (currentUser.displayName !== user?.displayName) {
                setUser(currentUser);
            }
        } else {
            setUser(null);
        }
      setLoading(false);
    })
    return ()=>{
        unSubscribe();
    }
},[user])
    const authInfo = {
   user,
   createUser,
   signInUser,
   logOut,
   googleSignIn,
   GithubSignIn,
   loading


    }
   
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
