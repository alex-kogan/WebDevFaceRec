import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

import './FaceRecognitionBox.css'

const FaceRecognitionBox = ({imageURL, isDetecting, detectionBoxArray}) => {
	let detectionBoxElements = [];
	if (!isDetecting) {
			detectionBoxElements = detectionBoxArray.map((detectionBox, index) => {
				return <div className='bounding-box' key={index}
							style={{top: detectionBox.topRow, right: detectionBox.rightCol, bottom:detectionBox.bottomRow, left:detectionBox.leftCol}}>
							</div>;
			});
	}
	
	return (
		<div className='display-flex justify-center' id='FaceRecognition'>
			<LoadingOverlay
				active={isDetecting}
				spinner
				text='Processing your image...'
			>
				<img id='inputImage' className='center' alt='' src={imageURL} width='500px' height='auto'/>
				{detectionBoxElements}
			</LoadingOverlay>
		</div>
	)		
}

export default FaceRecognitionBox