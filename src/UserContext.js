import { createContext,useState } from "react";



export const userContext = createContext(null)

export  function UserContextProvider({children}){
  let [user,setIsUser] = useState(null)
  let [login,setLogin] = useState(null)
  let [open,setOpen] = useState(false)


  return (
    <userContext.Provider value={{user,setIsUser,login,setLogin,open,setOpen}}>
   {children}
    </userContext.Provider>
  )
}