
import '../Style/Navigation.css';

import {Link, NavLink} from 'react-router-dom';
const Navigation= ()=>{
   

    return(
        <div>
          <nav className="container">
              <div className="logo">
                {/* <img src="%PUBLIC_URL%/nike.png" alt="logo"/> */}
                <h4>SHOES SHOP</h4>
              </div>

              <ul className='navbar'>
                <li><NavLink to="/" id="catlink"
                    style={({isActive})=>{return{color:isActive ? 'red' :' '}}}
                >Home</NavLink></li>    

                <li><NavLink to="/Shoescategory" id="catlink"
                    style={({isActive})=>{return{color:isActive ? 'red' :' '}}}
                >Category</NavLink></li>     

                {/* <li href="#">Contact</li> */}

                <li><NavLink to="/Account" id="catlink"
                    style={({isActive})=>{return{color:isActive ? 'red' :' '}}}
                >Account</NavLink></li>
              </ul>
              
            {/* <Link to="/Login" className='link-button'><button>Login</button></Link> */}
            
          </nav>
        </div>
    );
};
export default Navigation;