import { useContext} from 'react';
import './App.css';

import AuthContext from './store/auth-context';
import ShowDashBoard from './components/UI/ShowLogin/showDashBoard';
import LoginForm from './components/User/LoginForm';



const App = () => {
  
   const ctx = useContext(AuthContext)

  return (
    <>
       
        {ctx.isLoggedIn && <ShowDashBoard />}
        {!ctx.isLoggedIn && <LoginForm/>}
      
    </>
  );
};

export default App;
 