import '../Style/Account.css';
import {FaFacebook} from "react-icons/fa";
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {SiIndeed } from 'react-icons/si';
import {FaInstagram } from 'react-icons/fa';
function Account({userName}){
    return(
        <div className="accountbox">
            <div id="text">
                <div className='namebox'>
                    <h1>Hello, Mr/Mrs/Miss</h1>
                    <h2>{userName ? userName : 'Please Login'}</h2>               
                </div>
                <h3>Let's Click The Category.</h3>
                <marquee>Thank You For Visite My Page !</marquee>
            </div>

          <div id="iconbox">
            <h6>|| Visit My Other Social Media Accounds. ||</h6>
            <div id="accounticon">
                    <a href="https://linkedin.com/in/chintu-dash-851060314/" target="_blank" > <FaLinkedin /> </a>
                    <a href="https://github.com/ChintuDash" target="_blank"> <FaGithub />  </a>
                    <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobsearch--indeedmobile" target="_blank"> <SiIndeed /> </a>
                    <a href="https://www.facebook.com/dashchintu.dash/" target="_blank"> <FaFacebook />  </a>
                    <a href="https://www.instagram.com/chintu___dash/" target="_blank"> <FaInstagram /> </a>                                       
                </div>                
          </div>

        </div>
    )
}
export default Account;