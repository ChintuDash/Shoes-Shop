import { Link } from 'react-router-dom';
import '../Style/CatNav.css';

function CatNav(){
    return(
        <section>
            <Link to="" id="navlink"><div>Athletic Shoes.</div></Link>
            <Link to="Casual" id="navlink"> <div>Casual Shoes</div></Link>
            <Link to="Dress" id="navlink"><div>Dress Shoes</div></Link>
             <Link to="Boots" id="navlink"> <div>Boots</div></Link>
            <Link to="Sandals" id="navlink"><div>Sandals</div></Link>
             <Link to="Formal" id="navlink"> <div>Formal Shoes</div></Link>
            <Link to="Special" id="navlink"><div>Specialty Shoes</div></Link>
        </section>
    )
}
export default CatNav;