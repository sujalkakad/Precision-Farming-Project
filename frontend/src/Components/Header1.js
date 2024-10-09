import React, {Component} from 'react';
import { useNavigate } from 'react-router-dom';
import "./Home.css"

window.onscroll = function(){
  var navbar = document.querySelector("nav");

  if(window.pageYOffset  > 100){
    navbar.classList.add("fixed-navbar");
  }
  else{
    navbar.classList.remove("fixed-navbar");
  }
};

function Header1() {

  // const Home = () => {
  //   const [showContact, setShowContact] = useState(false);
  
  //   const handleContactClick = () => {
  //     setShowContact(true);  // Show the Contact component
  //   };



  return (
    <div>
      <div>
          
          <nav>
            <h1 >Precision Farming</h1>

            <li>
              <a href="Home.js" >Home</a>
            </li>

            <li>
              <a href='History.js' >View History</a>
            </li>

            <li>
              <a href='Weather.js' >Weather</a>
            </li>

            <li>
              <a href='Features.js' >Features</a>
            </li>

            <li>
              <a href="./Contact.js"  >Contact Us</a>
            </li>

            <li>
              <a href='Sign_up.js' type="button" className="btn btn-primary">Sign Up</a>
            </li>

            <li>
              <a href='Sign_in.js' type="button" className="btn btn-primary"> Sign In </a>
                            

              {/* Light Button */}
              {/* <button type="button" className="btn btn-light">Light Button</button> */}

            </li>

            

          </nav>
    
      </div>
    </div>
  )
}

export default Header1
