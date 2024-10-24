import React from 'react';
import '../Style/Slide.css';
const ImageSlider=()=>{
    return(
     //    <div className='slider'>
            
     //            <div className='slide-track'>
     //                <div className="slide">
     //                     <img src={process.env.PUBLIC_URL+"/images/img6.webp"} alt="Slide 1"/>
     //                </div>                
     //                <div className='slide'>
     //                     <img src={process.env.PUBLIC_URL+"/images/img5.png"} alt="slide 2"/>
     //                </div>
     //                <div className="slide">
     //                     <img src={process.env.PUBLIC_URL+"/images/img6.webp"} alt="Slide 1"/>
     //                </div>                
     //                <div className='slide'>
     //                     <img src={process.env.PUBLIC_URL+"/images/img5.png"} alt="slide 2"/>
     //                </div>
     //            </div>
           
     //    </div>



     <div className='slider'>
            
                <div className='slide-track'>
                    
                         <img src={process.env.PUBLIC_URL+"/images/img9.jpg"} alt="Slide 1"/>
                   
                         <img src={process.env.PUBLIC_URL+"/images/img10.jpg"} alt="slide 2"/>
                    
                         <img src={process.env.PUBLIC_URL+"/images/img1.jpg"} alt="Slide 1"/>
                   
                         <img src={process.env.PUBLIC_URL+"/images/img8.webp"} alt="slide 2"/>
                    
                </div>
           
        </div>
    );
};
export default ImageSlider;