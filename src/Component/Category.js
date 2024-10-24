import {Routes, Route} from 'react-router-dom';
import '../Style/Category.css';
import CatNav from './CategoryNav';
import AthleticShoes from './CategoryNav/AthleticShoes.js';
import Boots from './CategoryNav/Boots.js';
import CasualShoes from './CategoryNav/CasualShoes.js';
import DressShoes from './CategoryNav/DressShoes.js';
import FormalShoes from './CategoryNav/FormalShoes.js';
import Sandals from './CategoryNav/Sandals.js';
import SpecialShoes from './CategoryNav/SpecialShoes.js';
function Shoescategory(){
    return(
        <div className="categorybox">
            <CatNav/>
           <div>
            <Routes>
                <Route index element={<AthleticShoes/>}/>
                <Route path="Casual" element={<CasualShoes/>}/>
                <Route path="Dress" element={<DressShoes/>}/>
                <Route path="Boots" element={<Boots/>}/>
                <Route path="Sandals" element={<Sandals/>}/>
                <Route path="Formal" element={<FormalShoes/>}/>
                <Route path="Special" element={<SpecialShoes/>}/>
            </Routes>            
            </div>
        </div>
    )
}
export default Shoescategory;