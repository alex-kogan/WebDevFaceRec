import React from 'react';

const ImageLinkForm = ({onInputChange, onDetectClick}) => {
	return (
		<div>
			<p className='f3 '>
				{'This magic brain will detect face in your pictures give it a try'}
			</p>
			<div className='display-flex justify-center'>
				<div className='w-75 center pb3'>
					<input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
					<button className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple' onClick={onDetectClick}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;