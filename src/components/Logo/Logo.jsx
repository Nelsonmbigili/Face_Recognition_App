import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css'


const Logo = () =>{
		return(
			 <Tilt className ="Tilt br3 shadow-2 ma3" options={{max:55}} style={{height:150, width:150}} >
			 <div className="Tilt-inner pa1">
			 	<img src="/assets/Logo.png" alt="Logo" style={{ width: "10em", height: "10em", objectFit: "contain" }} />
			 </div>
			    
             </Tilt>
			
			);
	}
export default Logo;