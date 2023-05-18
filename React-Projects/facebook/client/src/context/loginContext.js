import axios from "axios"
import { createContext, useState, useEffect } from "react"
axios.defaults.baseURL = 'http://localhost:4000/user/'

 export const UserContext = createContext({});

 export const UserContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const fetchUser = async()=>{
     const response =  await axios.get('profile');
     setUser(response.data)
    }
    useEffect(()=>{
        if(!user){ 
            fetchUser()
        }
    },[]);

    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}