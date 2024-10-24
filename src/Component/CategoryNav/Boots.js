import { Link } from 'react-router-dom';
import '../../Style/CategoryNav.css';

function Boots(){
    return(
        <div className="catbox">
            <h1> Boots</h1>
             <div id="cat1">
               
                <div id="line1">
                    <Link to="/AddShoes" id="addshoes"><h4> Ankle Boots</h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4> Chelsea Boots</h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4> Chukka Boots</h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4> Combat Boots</h4></Link>
                    
                </div>
                <div id="line2">
                     <Link to="/AddShoes" id="addshoes"><h4> Work Boots</h4></Link>
                   
                </div>
            </div>
        </div>
    )
}
export default Boots;