import {connect} from 'react-redux';

import App from '../Components/App/App';

import {routeChange, signOut, signIn, register} from '../Actions'

const mapStateToProps = (state) => {
  return {
    appRoute: state.appRoute.route,
    signInStatus: state.signInStatus.signInStatus,
    userData: state.userData
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