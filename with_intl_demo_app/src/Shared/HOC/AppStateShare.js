import { connect } from "react-redux";

import AppActions from "../../App/Main/AppActions";

const mapStateToProps = state => {
  return {
    isAppBusy: state.AppReducer.isAppBusy
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleAppReady: isAppReady => {
      dispatch(AppActions.toggleAppReadyState(isAppReady));
    }
  };
};

const AppStateShare = StateSubscriberComponent => {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(StateSubscriberComponent);
};

export default AppStateShare;
