import { connect } from "react-redux";

import App from "./App";
import AppActions from "./AppActions";
import UserActions from "../../Shared/Reducers/UserActions";

const mapStateToProps = state => {
  return {
    isAppBusy: state.AppReducer.isAppBusy,
    isUserLoggedIn: state.UserReducer.loggedInUser && Object.keys(state.UserReducer.loggedInUser).length ? true : false
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAppReady: isAppReady => {
      dispatch(AppActions.toggleAppReadyState(isAppReady));
    },
    toggleAppBusy: isAppBusy => {
      dispatch(AppActions.toggleAppBusyState(isAppBusy));
    },
    getUserState: token => {
      dispatch(UserActions.getUserState(token));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
