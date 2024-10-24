import '../Style/Account.css';
import {FaFacebook} from "react-icons/fa";
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {SiIndeed } from 'react-icons/si';
function Account({userName}){
    return(
        <div className="accountbox">
            <div className='namebox'>
                <h1>Hello, Mr/Mrs/Miss</h1>
                <h2>{userName ? userName : "Please Login"}</h2>
                <h3>Thank You For Visite My Page !</h3>
            </div>
            <div id="accounticon">
                   <a href="https://linkedin.com/in/chintu-dash-851060314/" target="_blank" > <FaLinkedin /> </a>
                   <a href="https://github.com/ChintuDash" target="_blank"> <FaGithub />  </a>
                   <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobsearch--indeedmobile" target="_blank"> <SiIndeed /> </a>
                   <a href="https://www.facebook.com/dashchintu.dash/" target="_blank"> <FaFacebook />  </a>
                    {/* <a href="https://www.instagram.com/chintu___dash/" target="_blank"> <FaInstagram /> </a> */}

            </div>
        </div>
    )
}
export default Account;