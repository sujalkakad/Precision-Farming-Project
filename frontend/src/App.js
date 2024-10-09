import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Header1 from "./Components/Header1.js"
import Slide from "./Components/Slide.js"
import Contact from "./Components/Contact.js"



function App() {
  return (
    <div className="App">

      <Header1 />
      <Slide />
      <Contact />

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
