
import { useContext } from 'react';
import './ShowLogin.css'
import AuthContext from '../../store/auth-context';
 

const ShowDashBoard = () =>{
    const {isLogin}  =   useContext(AuthContext)
    console.log('cf',isLogin)
    return(
        <>
        <div className='show-container'>
         { isLogin && <h3>Welcome Back!</h3>}
        </div>
        </>
    )
}

export default  ShowDashBoard;