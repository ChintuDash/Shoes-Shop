import '../../Style/CategoryNav.css';
import { Link } from 'react-router-dom';
function SpecialShoes(){
    return(
        <div className="catbox">
            <h1>  Specialty Shoes</h1>
            <div id="cat1">               
                <div id="line1">
                    <Link to="/AddShoes" id="addshoes"><h4>Work Shoes </h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>Orthopedic Shoes</h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>Dance Shoes </h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>Golf Shoes</h4></Link>
                    
                </div>
                <div id="line2">
                    <Link to="/AddShoes" id="addshoes"><h4>Cycling Shoes</h4></Link>
                    
                </div>
            </div>
        </div>
    )
}
export default SpecialShoes;