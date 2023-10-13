import {  useContext, useEffect, useReducer, useState } from "react"
import './LoginForm.css'
import ShowDashBoard from "../UI/showDashBoard"
import AuthContext from "../../store/auth-context";

function reducer (state,action){
      switch(action.type){
         case'email_change':{
           return {
              email:action.nextEmail,
              password: state.password,
           }
         }
         break;
         case 'password_change':{
            return {
               ...state,
               password:action.nextPassword
            }
         }
         break;
         case 'empty':
            return {email:'',password:''}
            break;
      }
}
const LoginForm = (props) =>{
   const {isLogin} = useContext(AuthContext)
   console.log('login',isLogin)
       const [userLogin,setUserLogin]   =   useState(isLogin)
       const [errorMessage, setErrorMessage] = useState('fill information');
       const [state,dispatch] = useReducer(reducer,{email:'',password:''})
 


       useEffect(()=>{
       let identifire =  setTimeout(()=> { 
         if(!state.email.trim().length || !state.password.trim().length){
            setErrorMessage('Please Enter a valid email and password and collage')
         }
         else if(state.password.trim().length<7){
            setErrorMessage(`Please Enter a valid password`)
         }
         else{
            setErrorMessage(``)
         }
      },500)

      return () => { 
         clearTimeout(identifire)
       }
         
       },[state])
     
       const handleChanges = (e) =>{
         let name = e.target.name;
         let value = e.target.value;
         if(name == 'email')
         dispatch({type:'email_change',nextEmail:value})
        else if(name == 'password')
        dispatch({type:'password_change',nextPassword:value})
       }

    const handleSubmit = (event) =>{
      event.preventDefault()
      if(!errorMessage){
       setUserLogin(true)
       props.onLogin()
      }
      dispatch({type:'empty'})
    }

    return ( 
        <>
        <div className="form-container">
          {!isLogin &&
         <form onSubmit={handleSubmit}> 
         <div className="form-data">
            <label htmlFor="userName">Email:  </label>
            <input type="email"  name='email' value={state.email} onChange={handleChanges}/>
            </div>
            <div className="form-data">
            <label htmlFor="userAge">Password: </label>
            <input type="password" name='password' value={state.password}  onChange={handleChanges} />
            </div>
            <div className="submit-button">
            <button type="submit">Log In</button>
            </div>
         </form>
}

         <div className={!userLogin ? "json-data" : ""}>
          {!userLogin && <h4 style={{color:'red'}}>{errorMessage}</h4>}
         </div>
         {userLogin && <ShowDashBoard />} 
         </div>
        </>
    )
}
export default LoginForm ;