import { useEffect, useState } from "react"
import './AddUser.css'
import ShowLogin from "../UI/ShowLogin"
const AddUser = () =>{
       const [userLogin,setUserLogin]   =   useState(false)
       const [user,setUser] = useState({email:'',password:'',collage:''})
       const [errorMessage, setErrorMessage] = useState('fill information');


       useEffect(()=>{

         if(!user.email.trim().length || !user.password.trim().length || !user.collage.trim().length){
            setErrorMessage('Please Enter a valid email and password and collage')
         }
         else if(user.password.trim().length<7){
            setErrorMessage(`Please Enter a valid password`)
         }
         else{
            setErrorMessage(``)
           // localStorage.setItem('isLoginUser',1)
           // setUserLogin(true)
         }
         
       },[user])
     
       const handleChanges = (e) =>{
         let name = e.target.name;
         let value = e.target.value;
         setUser({...user,[name]:value})
       }

    const handleSubmit = (event) =>{
      event.preventDefault()
      if(!errorMessage){
      localStorage.setItem('isLoginUser',1)
       setUserLogin(true)
      }
      setUser({email:'',password:''})
    }

    return (
        <>
        <div className="form-container">
          {!userLogin &&
         <form onSubmit={handleSubmit}> 
         <div className="form-data">
            <label htmlFor="userName">Email:  </label>
            <input type="email"  name='email' value={user.email} onChange={handleChanges}/>
            </div>
            <div className="form-data">
            <label htmlFor="userAge">Password: </label>
            <input type="password" name='password' value={user.password}  onChange={handleChanges} />
            </div>
            <div className="form-data">
            <label htmlFor="userCollage">Collage: </label>
            <input type="text" name='collage' value={user.collage}  onChange={handleChanges} />
            </div>
            <div className="submit-button">
            <button type="submit">Log In</button>
            </div>
         </form>
}

         <div className={!userLogin ? "json-data" : ""}>
          {!userLogin && <h4 style={{color:'red'}}>{errorMessage}</h4>}
         </div>
         {userLogin && <ShowLogin />} 
         </div>
        </>
    )
}

export default AddUser ;