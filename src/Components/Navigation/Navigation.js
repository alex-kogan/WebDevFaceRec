import React from 'react';

const Navigation = ({singedIn, onSignOutClick, onRouteChange}) => {
	const navContent = (singedInStatus) => {
		if (singedInStatus) {
			return <p className='f3 link dim black underline pa3 pointer'
				onClick={() => {
									onSignOutClick();
									onRouteChange('sign_in');
									}
								}
			> Sign Out </p>
		}
		else {
			return <div className='flex justify-end'>
					<p className='f3 link dim black underline pa3 pointer'
					onClick={() => onRouteChange('sign_in')}
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