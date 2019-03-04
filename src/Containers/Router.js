import {connect} from 'react-redux';

import App from '../Components/App/App';

import {routeChange, signOut} from '../Actions'

const mapStateToProps = (state) => {
  return {
    appRoute: state.appRoute.route,
    signedIn: state.signInStatus.signIn
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSignOutClick: () => dispatch(signOut()),
    onRouteChange: (destination) => dispatch(routeChange(destination))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);