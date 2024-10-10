import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';


import Header1 from "./Components/Header1.js"
import Slide from "./Components/Slide.js"
import Contact from "./Components/Contact.js"
import Footer from "./Components/Footer.js"
import About from "./Components/About.js"
import Introduction from "./Components/Introduction.js"
import Testimonial from "./Components/Testimonial.js"


function App() {
  return (
    <div className="App">

      <Header1 />
      <Slide />
      <Introduction />
      <Contact />
      <About />
      <Testimonial />
      <Footer />

      {/* <header> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        </header> */}
    </div>
  );
}

export default App;
