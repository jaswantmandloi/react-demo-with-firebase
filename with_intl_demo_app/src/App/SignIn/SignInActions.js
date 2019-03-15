import { replace } from "connected-react-router";

import AppActions from "../Main/AppActions";
import { thirdPartyAPI } from "../../Shared/Util/Network";
import UserActions from "../../Shared/Reducers/UserActions";
import StorageService from "../../Shared/Services/StorageService";
import appRoutes from "../Main/RouteConfigs";
import EndPointConfig from "../../Shared/Config/EndPointConfig";


const SignInActions = {
  login: () => {
    return async dispatch => {
      //dispatch(AppActions.toggleAppBusyState(true));

      try {
        let response = await thirdPartyAPI.get(EndPointConfig.login.path);
        let user = response.data[0];        
        dispatch(UserActions.saveUserState(user));

        StorageService.saveUserToken('tokenabc');
        
        // Now redirect to the dashboard
        dispatch(replace(appRoutes.dashboard.path));          

      } catch (error) {
        dispatch({ type: "CHANGE_SIGNIN_STATE", payload: { error } });
      }

      //dispatch(AppActions.toggleAppBusyState(false));
    };
  },

  resetSignInState: () => {
    return {
      type: "SIGNIN_RESET",
      payload: {}
    };
  }
};

export default SignInActions;
