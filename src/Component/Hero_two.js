import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from './SlideBar.js';
import '../Style/Hero_two.css';
class Herotwo extends Component{
    render(){
        return(
            <div className='herotwo_box'>
               
                    <p id="p1">Also Available On</p>
                      <p id="p2">
                            YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH OUR 
                            SHOES.YOUR FEET DESERVE THE BEST AND WERE HERE TO HELP YOU WITH 
                            OUR
                            SHOES.
                       </p>
                   
                        {/* Slide Component */}
                            <ImageSlider/>

                    <div id="lastbtn">
                       <Link to="/Login" className="link-button"><button>Create Account</button></Link>
                        {/* <button>Shop Now</button> */}
                    </div>
            </div>
        )
    }
}
export default Herotwo;