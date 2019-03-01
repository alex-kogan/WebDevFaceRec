import React from 'react';

const Navigation = ({onSignOutClick}) => {
	return (
		<nav className='flex justify-end'>
			<p className='f3 link dim black underline pa3 pointer'
				onClick={onSignOutClick}
			> Sign Out </p>
		</nav>
	)
}

export default Navigation