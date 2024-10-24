import '../Style/Login.css';
import { useState } from 'react';

function Login({onInputChange, onLogin}){
  const [name,setName]=useState(' ');

  const handleChange=(e)=>{
    const inputValue=e.target.value;
   setName(inputValue);
   onInputChange(inputValue);
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    onLogin();
  }
    return(
      <div className="loginbox">
        <form className="box" onSubmit={handleSubmit}>                       
                <label >Enter Your Name </label>                                  
                <input 
                type="text"   
                maxLength={20}             
                value={name}
                onChange={handleChange}
                autoFocus/>
                <input type="submit" value="Create Account"/>
                {/* <Link to="/Account" id="loginbtn">Create Account</Link> */}
          
        </form>
        </div>
    )
}
export default Login;