import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import "./Home.css"
function About() {
  return (
    <div className='aboutus' >
        <h4>About Us</h4>
        <h2>Our Core Competence</h2>
        <p>Precision Farming Project involves Crop Recommendation, Crop Disease Prediction,<br/> By Using Current Location Weather</p>

        <div className="aboutInner">
            <div className='box'>
                    <div className="boxinner1">
                            <div>
                                <h5>Crop<br/>Recommendation</h5>
                                <p>We Predict the most<br/>suitable crops for given<br/>farm location on aggregated<br/>environmental data. 
                                    <a href=''><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrowicon' /></a>
                                </p>
                                
                            </div>
                            <div className='imageDiv'>
                                <img className='aboutimg' src="https://user-images.githubusercontent.com/110320717/205117082-e1333270-cba7-4c1e-a533-620b29e86ac4.jpg" />
                            </div>
                    </div>              
           

                    <div className="BoxInner22">
                            <div>
                                <h5>Crop<br/>Disease Prediction</h5>
                                <p>We Predict Crop<br/>Disease Prediction using<br/>current weather, soil moisture <br/>and crop condition. 
                                    <a href=''><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrowicon' /></a>
                                </p>
                                
                            </div>
                            <div className='imageDiv'>
                                <img className='aboutimg' src="https://i0.wp.com/geopard.tech/wp-content/uploads/2022/06/63.2-min.jpg?resize=1024%2C555&ssl=1" />
                            </div>
                    </div>  



                    <div className="boxInner33">
                            <div>
                                <h5>Comparative<br/>Analysis</h5>
                                <p>Compare performance of system with existing farming practices in terms of yield <br/>optimization and fertilizers<br/>usage efficiency 
                                    <a href=''><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrowicon' /></a>
                                </p>
                                
                            </div>
                            <div className='imageDiv'>
                                <img className='aboutimg' src="https://digitaltrendsreport.com/wp-content/uploads/2023/04/AdobeStock_565901991.jpg" />
                            </div>
                    </div> 




                    <div className="BOXInner4">
                            <div>
                                <h5>Crop<br/>Recommendation</h5>
                                <p>We Predict the most<br/>suitable crops for given<br/>farm location on aggregated<br/>environmental data. 
                                    <a href=''><FontAwesomeIcon icon={faArrowUpRightFromSquare} className='arrowicon' /></a>
                                </p>
                                
                            </div>
                            <div className='imageDiv'>
                                <img className='aboutimg' src="https://user-images.githubusercontent.com/110320717/205117082-e1333270-cba7-4c1e-a533-620b29e86ac4.jpg" />
                            </div>
                    </div> 
            </div>
        </div>




      



    </div>
  )
}

export default About
