import {createContext,useState,useEffect} from 'react'
import {isAuthenticated} from "../components/auth"

const LoginContext=createContext()
export const LoginProvider=({children})=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    useEffect(()=>{
        setName(isAuthenticated()?JSON.parse(localStorage.getItem('name')).split(" ")[0].toUpperCase():"")
        setEmail(isAuthenticated()?JSON.parse(localStorage.getItem('email')):"")
    },[children])
    return <LoginContext.Provider value={{name,email}} >
        {children}
    </LoginContext.Provider>
}
export default LoginContext