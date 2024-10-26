import '../Style/Login.css';
import { useState } from 'react';

function Login({onInputChange, onLogin}){
  const [name,setName]=useState('');
 

  const handleChange=(e)=>{
    const inputValue=e.target.value;
   setName(inputValue);
   onInputChange(inputValue);

  //  if(/^[A-Za-z]*$/.test(value)){
  //   setName(value);
  //  }else{
  //   alert("Only letters are allowed!");
  //  }
  }

 

  const handleSubmit=(e)=>{
    // e.preventDefault();
    // onLogin();
   
    if(!name.trim()){     
      e.preventDefault(); 
      alert("Name is required!");     
      return;
    }   
    onLogin()
    alert("Form submitted successfully!")
  };

 

    return(
      <div className="loginbox">
        <form className="box" onSubmit={handleSubmit}>                       
                <label >Enter Your Name </label>                                  
                <input 
                type="text"   
                maxLength={20}  
                minLength={5}           
                value={name}
                pattern="[A-Z a-z]+"
                onChange={handleChange}                
                autoFocus
                required
                />
                <input type="submit" value="Create Account"/>
                {/* <Link to="/Account" id="loginbtn">Create Account</Link> */}
          
        </form>
        </div>
    )
}
export default Login;