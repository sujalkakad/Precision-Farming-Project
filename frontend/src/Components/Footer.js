import React from 'react'
import "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { faCoffee } from '@fortawesome/free-solid-svg-icons'; 
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


function Footer() {
  return (
    <div> 

        <div className='footer'>

            <div className='footerleft'>
                <div>
                    <h1>Precision Farming</h1>
                </div>
                <div className='socialmedia'>
                    {/* <FontAwesomeIcon icon={faCoffee} /> */}
                    <a href=''> 
                        <FontAwesomeIcon icon={faFacebook} className='icon'/>
                    </a>

                    <a href=''>
                        <FontAwesomeIcon icon={faInstagram} className='icon'/>
                    </a>

                    <a href=''>
                    <FontAwesomeIcon icon={faLinkedin} className='icon'/>
                    </a>
                </div>
            </div>

            <div className='footermiddle'>
                <div className='middleleft'>
                    <h4> Quick Links</h4>

                    <ul>
                        <li>
                            <a href='#'>Home</a>
                        </li>

                        <li>
                            <a href='#'>About</a>
                        </li>

                        <li>
                            <a href=''>View History</a>
                        </li>

                        <li>
                            <a href=''>Weather</a>
                        </li>

                        <li>
                            <a href="">Features</a>
                        </li>

                        <li>
                            <a href="">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className='middleright'>
                    <h4>Contact:</h4>
                    <div>
                        <h5>India:</h5>
                        <div>
                            <i class="fa-solid fa-location-dot"></i>
                            <h6>Nashik - 422003</h6>
                        </div>

                        <div>
                            <i class="fa-solid fa-phone"></i>
                            <h6>+91 9876543210</h6>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>

    </div>
  )
}

export default Footer;
