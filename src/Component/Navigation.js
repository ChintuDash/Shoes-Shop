
import '../Style/Navigation.css';

import {Link} from 'react-router-dom';
const Navigation= ()=>{
   

    return(
        <div>
          <nav className="container">
              <div className="logo">
                {/* <img src="%PUBLIC_URL%/nike.png" alt="logo"/> */}
                <h4>SHOES SHOP</h4>
              </div>

              <ul>
                <li><Link to="/" id="catlink">Home</Link></li>    

                <li><Link to="/Shoescategory" id="catlink">Category</Link></li>     

                {/* <li href="#">Contact</li> */}

                <li><Link to="/Account" id="catlink">Account</Link></li>
              </ul>
              
            {/* <Link to="/Login" className='link-button'><button>Login</button></Link> */}
            
          </nav>
        </div>
    );
};
export default Navigation;