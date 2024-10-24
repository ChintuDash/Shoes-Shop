import '../../Style/CategoryNav.css';
import { Link } from 'react-router-dom';
function CasualShoes(){
    return(
        <div className="catbox">
            <h1>Casual Shoes</h1>
            <div id="cat1">                
               <div id="line1">
               <Link to="/AddShoes" id="addshoes"><h4>Sneakers</h4></Link>
               <Link to="/AddShoes" id="addshoes"><h4>Loafers</h4></Link>
               <Link to="/AddShoes" id="addshoes"><h4> Slip-Ons</h4></Link>
               <Link to="/AddShoes" id="addshoes"><h4> Boat Shoes</h4></Link>
                    
               </div>
                <div id="line2">
                <Link to="/AddShoes" id="addshoes"><h4> Espadrilles </h4></Link>
                    
                </div>
            </div>
        </div>
    )
}
export default CasualShoes;