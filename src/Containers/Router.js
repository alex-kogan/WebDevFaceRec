import {connect} from 'react-redux';

import App from '../Components/App/App';

import {routeChange, signIn, signOut} from '../Actions'

const mapStateToProps = (state) => {
  return {
    appRoute: state.appRoute.route,
    signedIn: state.signInStatus.signIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignInClick: () => dispatch(signIn()),
    onSignOutClick: () => dispatch(signOut()),
    onRouteChange: (event) => dispatch(routeChange(event.target.title))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);