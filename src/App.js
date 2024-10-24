import Navigation from './Component/Navigation';
import HeroSection from './Component/Hero';

import './App.css';
import { useState } from 'react';
import { HashRouter, Routes,Route ,Navigate} from 'react-router-dom';
import Login from './Component/Login';
import Shoescategory from './Component/Category';
import Account from './Component/Account';
import AddShoes from './Component/AddShoes';
function App() {
  const [userName, setUserName]=useState('');
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  const handleInputChange=(name)=>{
    setUserName(name);
  }

  const handleLogin=()=>{
    setIsLoggedIn(true);
  }
  return (
    <div className="App">
      <HashRouter>
             <Navigation />
             
        <Routes>
            <Route path="/" element={<HeroSection/>}/>

            <Route path="/Login"
                   element={
                    !isLoggedIn ? (
                      <Login onInputChange={handleInputChange} onLogin={handleLogin}/>
                    ) : (
                      <Navigate to="/Account"/>
                    )
                   }/>


            <Route path="/Shoescategory/*" 
                    element={
                      isLoggedIn ? <Shoescategory/> : <Navigate to="/Login"/>
                    }/>


            <Route path="/Account"
                   element={
                    isLoggedIn ? <Account userName={userName}/> : <Navigate to="/Login"/>
                   }/>


                   {/* redirect to login if the user is not authenticated */}
            {/* <Route path="*" element={<Navigate to="/Login"/>}/> */}
            

            <Route path="/AddShoes"
                element={
                  isLoggedIn ? <AddShoes/> : <Navigate to="/Login"/>}/>
           
        </Routes>
        
      </HashRouter>
      
       
    </div>
  );
}

export default App;
