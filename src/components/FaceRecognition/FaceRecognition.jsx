import React from 'react';

const FaceRecognition = ({Image_Url}) =>{
		return(
			<div className="center ma">
			<div className="absolute mt2">
				<img id = "input_image" src={Image_Url} alt="" width="500px" height="auto"/>
			</div>

				
			</div>
			);
	}
export default FaceRecognition;