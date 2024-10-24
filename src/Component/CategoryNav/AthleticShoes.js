import '../../Style/CategoryNav.css';
import { Link } from 'react-router-dom';
function AthleticShoes(){
    return(
        <div className="catbox">
            <h1> Athletic Shoes</h1>
            <div id="cat1">               
                <div id="line1">
                    <Link to="/AddShoes" id="addshoes"><h4>Running Shoes</h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>Cross-Training</h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>Walking Shoes</h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>Tennis Shoes</h4></Link>
                    
                </div>
                <div id="line2">    
                <Link to="/AddShoes" id="addshoes"><h4> Basketball Shoes</h4></Link>
                <Link to="/AddShoes" id="addshoes"><h4>Soccer Cleats</h4></Link>
                <Link to="/AddShoes" id="addshoes"><h4>Hiking Boots</h4></Link>                               
                </div>           
            </div>
        </div>
    )
}
export default AthleticShoes;