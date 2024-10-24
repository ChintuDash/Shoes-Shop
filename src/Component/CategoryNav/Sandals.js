import '../../Style/CategoryNav.css';
import { Link } from 'react-router-dom';
function Sandals(){
    return(
        <div className="catbox">
            <h1> Sandals</h1>
            <div id="cat1">               
                <div id="line1">
                <Link to="/AddShoes" id="addshoes"><h4>Flip-Flops </h4></Link>
                <Link to="/AddShoes" id="addshoes"><h4>Gladiator Sandals</h4></Link>
                <Link to="/AddShoes" id="addshoes"><h4>Slide Sandals </h4></Link>
                <Link to="/AddShoes" id="addshoes"><h4>Platform Sandals </h4></Link>
                   
                </div>
            </div>
        </div>
    )
}
export default Sandals;