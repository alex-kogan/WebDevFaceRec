import React from 'react';
import LoadingOverlay from 'react-loading-overlay';

import './FaceRecognition.css'

const FaceRecognition = ({imageURL, detectionStatus, detectionBoxArray}) => {
	const isDetecting = detectionStatus==='running';
	const isSuccessful = detectionStatus==='success';
	let detectionBoxElements = [];
	let i=0;
	if (isSuccessful) {
			detectionBoxElements = detectionBoxArray.map((detectionBox) => {
				i++;
				return <div className='bounding-box' key={i}
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
export default FaceRecognition