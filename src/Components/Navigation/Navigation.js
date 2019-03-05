import React from 'react';

const Navigation = ({singedIn, onSignOutClick, onRouteChange}) => {
	const navContent = (singedInStatus) => {
		if (singedInStatus) {
			return <p className='f3 link dim black underline pa3 pointer'
				onClick={onSignOutClick} // when the function has no parameters it could be called like this since it's a function defnition
			> Sign Out </p>
		}
		else {
			return <div className='flex justify-end'>
					<p className='f3 link dim black underline pa3 pointer'
					onClick={() => onRouteChange('sign_in')} // when the function receives a parameter it needs to wrapped in a function since onClick recives a function and not a "result"
					> Sign In </p>
					<p className='f3 link dim black underline pa3 pointer'
					onClick={() => onRouteChange('register')}
					//onClick={(event) => console.log(event.target.title)}
					> Register </p>
			</div>
		}
	}

	return (
		<nav className='flex justify-end'>
			{navContent(singedIn)}
		</nav>
	);
}

export default Navigation;