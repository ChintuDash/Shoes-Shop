import React from 'react'
import '../Style/AddShoes.css';
function AddShoes(){
    return(
        <div className="imgcontainer">
            <h1>Buy Now</h1>
           <div id="imgmain">
                 <div id="imgbox">
                    <img src={process.env.PUBLIC_URL+"/images/img12.jpg"} alt="not found"/>
                    <h5>Rs 1500 <small>M.R.P(3000)</small></h5>
                    <h4>Add to Cart</h4>
                </div>
                 
                <div id="imgbox">
                    <img src={process.env.PUBLIC_URL+"/images/img10.jpg"} alt="not found"/>
                    <h5>Rs 1875 <small>M.R.P(2500)</small></h5>
                    <h4>Add to Cart</h4>
                </div>
                <div id="imgbox">
                    <img src={process.env.PUBLIC_URL+"/images/img5.png"} alt="not found"/>
                    <h5>Rs 2800 <small>M.R.P(3500)</small></h5>
                    <h4>Add to Cart</h4>
                </div>
                <div id="imgbox">
                    <img src={process.env.PUBLIC_URL+"/images/img9.jpg"} alt="not found"/>
                    <h5>Rs 3375 <small>M.R.P(4500)</small></h5>
                    <h4>Add to Cart</h4>
                </div>
           </div>
        </div>
    )
}
export default AddShoes;