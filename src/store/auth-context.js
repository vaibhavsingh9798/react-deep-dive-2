import { createContext, useEffect, useState } from "react";

let AuthContext = createContext(
    {isLoggedIn:false,
     onLogin:(email,password) => { console.log('onLoin call')} 
    })

  export const AuthContextProvider = (props) =>{
            console.log('pro',props)
              const [isLoggedIn,setIsLoggedIn]  = useState(false)

                useEffect(()=>{
                 let login =   localStorage.getItem('isLogin')
                 if(login == 1)
                 setIsLoggedIn(true)
                },[])

              const loginHandler = () =>{
                localStorage.setItem('isLogin',1)
                setIsLoggedIn(true)
              }
     return(
    <AuthContext.Provider value={{isLoggedIn:isLoggedIn,onLogin:loginHandler}} >
        {props.children}
        </AuthContext.Provider>
     )
}

export default AuthContext;