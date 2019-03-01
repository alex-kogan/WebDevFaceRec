import React from 'react';

const ImageLinkForm = ({inputChange, detectClick}) => {
	return (
		<div>
			<p className='f3 '>
				{'This magic brain will detect face in your pictures give it a try'}
			</p>
			<div className='display-flex justify-center'>
				<div className='w-75 center'>
					<input className='f4 pa2 w-70 center' type='text' onChange={inputChange}/>
					<button className='f4 w-30 grow link ph3 pv2 dib white bg-light-purple' onClick={detectClick}>Detect</button>
				</div>
			</div>
		</div>
	);
}

export default ImageLinkForm;