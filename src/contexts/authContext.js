import React, { createContext, useEffect, useState } from "react";
import fire from "../fire";
export const authContext = createContext()

const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState('')
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)

    // для регистрации
    function signUp(email,password,navigate){
        console.log(email,password)
        fire
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(() => navigate('/log-in'))
            .catch(error => setError(error.message))
    }

    // для входа
    function signIn(email,password,navigate){
        fire
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => navigate('/movies'))
            .catch(error => setError(error.message))
    }

    // для выхода
    function logOut() {
        fire.auth().signOut();
      }

    // для проверки админа
    function authListener(){
        fire.auth().onAuthStateChanged(user => {
            if(user){
                if(user.email === 'timatop@gmail.com'){
                    setAdmin(true)
                }
                setUser(user)
            }else{
                setUser("")
                setAdmin(false)
            }
        })
    }
    useEffect(authListener, [])


    return(
        <authContext.Provider value={{user, error, admin, signIn, signUp, logOut}}>{children}</authContext.Provider>
    )
}
export default AuthContextProvider