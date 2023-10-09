import { useState } from "react"
import './AddUser.css'
const AddUser = () =>{
       const [users,setUsers]   =   useState([])
       const [user,setUser] = useState({name:'',age:0})
       const [errorMessage, setErrorMessage] = useState('');
     
       const handleChanges = (e) =>{
            console.log('ev',e.target.name,e.target.value)
         let name = e.target.name;
         let value = e.target.value;
         setUser({...user,[name]:value})
       }

    const handleSubmit = (event) =>{
      event.preventDefault()
      
      if(!user.name.length){
         setErrorMessage('Please Enter a valid name and age (non-empty values).')
      }
      else if(user.age <= 0){
         setErrorMessage(`Please Enter a valid age (>0) .`)
      }
      else{
         setErrorMessage(``)
         setUsers([...users,`${user.name} (${user.age} years old)`])
      }
      setUser({name:'',age:0})
    
    }

    return (
        <>
        <div className="form-container">
         <form onSubmit={handleSubmit}> 
         <div className="form-data">
            <label htmlFor="userName">Name:  </label>
            <input type="text"  name='name' value={user.name} onChange={handleChanges}/>
            </div>
            <div className="form-data">
            <label htmlFor="userAge">Age: </label>
            <input type="number" name='age' value={user.age}  onChange={handleChanges} />
            <div className="submit-button">
            <button type="submit">Add User</button>
            </div>
            </div>
         </form>
         <div className="json-data">
          {errorMessage && <h4 style={{color:'red'}}>{errorMessage}</h4>}
          {!errorMessage &&  users.map((user,ind) => (
            
              <ul key={ind}>
              
               <li>{user}</li>
            
              </ul>
             ))}
         </div>
         </div>
        </>
    )
}

export default AddUser ;