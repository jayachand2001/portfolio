import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <div id='services'>
      <div className="overlay">
        <div className='services-intro'>
        <h2 className='headings'>Serives</h2>
        <h1 style={{color: "white", textAlign: "center"}}>What Can I Do for You?</h1><br></br><br></br>
        </div>
        <div className='services-info'>
        <div className="webdevelopment">	
					<span className="icon"><img src="https://img.icons8.com/cotton/64/000000/web-design.png" alt='web designing pic'/></span><br></br><br></br>                       
	            <div classNane="service-content">	
	            	<h3 style={{color: "white"}}>Web Development</h3>  
	            </div>	                          
			   </div>
         <div className="programming">	
					<span className="icon"><img src="https://img.icons8.com/cotton/64/000000/laptop-coding.png" alt='coding pic'/></span><br></br><br></br>                         
	            <div className="service-content">	
	            	<h3 style={{color: "white"}}>Programming</h3>  
	            </div>	                          
			   </div>
         <div className="ai">	
					<span className="icon"><img src="https://img.icons8.com/cotton/64/000000/artificial-intelligence.png" alt='AI pic'/></span><br></br><br></br>                          
	            <div className="service-content">	
	            	<h3 style={{color: "white"}}>Artifical Intelligence</h3>  
	            </div>	                          
			   </div>
         </div>
         </div>
    </div>
  )
}
