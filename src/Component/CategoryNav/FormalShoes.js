import '../../Style/CategoryNav.css';
import { Link } from 'react-router-dom';
function FormalShoes(){
    return(
        <div className="catbox">
            <h1> Formal Shoes</h1>
            <div id="cat1">               
                <div id="line1">
                    <Link to="/AddShoes" id="addshoes"><h4>Heels </h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>Pumps </h4></Link>
                    <Link to="/AddShoes" id="addshoes"><h4>Ballet Flats </h4></Link>
                    
                </div>
            </div>
        </div>
    )
}
export default FormalShoes;