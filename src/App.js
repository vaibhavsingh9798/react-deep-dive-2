
import { useState } from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import ShowLogin from './components/UI/ShowLogin';
import { useEffect } from 'react';


const App = () => {
   const [isLogin,setIsLogin] =  useState(true)
    
   useEffect(()=>{
  let login= localStorage.getItem('isLoginUser')
  if(login != 1)
  setIsLogin(false)
   },[])

   const show = () => {
     if(isLogin)
     return <ShowLogin />
    else
    return  <AddUser /> 
   }

  return (
    <>
     {show()}
    </>
  );
};

export default App;
