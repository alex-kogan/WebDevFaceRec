import React from 'react';

const Navigation = ({onSignOutClick, singedIn, onRouteChange}) => {
	const navContent = (singedIn) => {
		if (singedIn) {
			return <p className='f3 link dim black underline pa3 pointer'
				onClick={onSignOutClick}
			> Sign Out </p>
		}
		else {
			return <div className='flex justify-end'>
					<p className='f3 link dim black underline pa3 pointer' title='sign_in'
					onClick={onRouteChange}
					> Sign In </p>
					<p className='f3 link dim black underline pa3 pointer' title='register'
					onClick={onRouteChange}
					//onClick={(event) => console.log(event.target.title)}
					> Register </p>
			</div>
		}
	}

	return (
		<nav className='flex justify-end'>
			{navContent(singedIn)}
		</nav>
	)
}

export default Navigation