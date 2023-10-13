import { useEffect , useState} from 'react';
import './App.css';

import AuthContext from './store/auth-context';
import ShowDashBoard from './components/UI/showDashBoard';
import LoginForm from './components/User/LoginForm';



const App = () => {
   const [isLogin,setIsLogin] =  useState(false)
    
   console.log('app')
   useEffect(()=>{
  let login= localStorage.getItem('isLoginUser')
  if(login == 1)
  setIsLogin(true)
   },[isLogin])
 
    const handleLogin = ()=>{
       localStorage.setItem('isLoginUser',1)
       setIsLogin(true)
    }

 console.log('app isl',isLogin)

  return (
    <>
       <AuthContext.Provider value={{isLogin:isLogin}}>
        {isLogin && <ShowDashBoard />}
        {!isLogin && <LoginForm onLogin={handleLogin} />}
       </AuthContext.Provider>
    </>
  );
};

export default App;
