import '../../Style/CategoryNav.css';
import { Link } from 'react-router-dom';
function DressShoes(){
    return(
        <div className="catbox">
            <h1>Dress Shoes</h1>
            <div id="cat1">                
               <div id="line1">
                    <Link to="/AddShoes" id="addshoes"><h4> Oxfords </h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>  Brogues </h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>  Derbies </h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>  Monk Straps </h4></Link>
                    
               </div>
                <div id="line2">
                      <Link to="/AddShoes" id="addshoes"><h4>Monk Straps </h4></Link>
                    
                </div>
            </div>
        </div>
    )
}
export default DressShoes;