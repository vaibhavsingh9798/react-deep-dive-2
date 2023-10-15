import {  useContext, useEffect, useReducer, useState } from "react"
import './LoginForm.css'
import ShowDashBoard from "../UI/ShowLogin/showDashBoard"
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

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
   
   
       const [userLogin,setUserLogin]   =   useState(false)
       const [errorMessage, setErrorMessage] = useState('fill information');
       const [state,dispatch] = useReducer(reducer,{email:'',password:''})
 
       const authCtx = useContext(AuthContext)

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
       authCtx.onLogin()
      }
      dispatch({type:'empty'})
    }

    return ( 
        <>
        <div className="form-container">
         
         <form onSubmit={handleSubmit}> 
          <Input type={'email'} name={'email'} label={'Email '} value={state.email} onChange={handleChanges} />
          <Input type={'password'} name={'password'} label={'Password '} value={state.password} onChange={handleChanges} />
            <div className="submit-button">
            <button type="submit">Log In</button>
            </div>
         </form>


         <div className={!userLogin ? "json-data" : ""}>
          {!authCtx.isLoggedIn && <h4 style={{color:'red'}}>{errorMessage}</h4>}
         </div>
         {authCtx.isLoggedIn && <ShowDashBoard />} 
         </div>
        </>
    )
}
export default LoginForm ;