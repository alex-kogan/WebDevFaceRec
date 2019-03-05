import {connect} from 'react-redux';

import App from '../Components/App/App';

import {routeChange, signOut, signIn, register} from '../Actions'

const mapStateToProps = (state) => {
  return {
    appRoute: state.appRoute.route,
    signedIn: state.signInStatus.signIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOutClick: () => dispatch(signOut()),
    onSignInClick: (signInData) => dispatch(signIn(signInData)),
    onRegisterClick: (registerData) => dispatch(register(registerData)),
    onRouteChange: (destination) => dispatch(routeChange(destination))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);