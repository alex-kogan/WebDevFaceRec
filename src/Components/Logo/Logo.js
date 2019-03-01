import React from 'react';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
	<div id='Logo' className='ma4 mt0 pa3 br2 shadow-5'>
		<img alt='Logo' src= {brain}/>
	</div>
	)
}

export default Logo