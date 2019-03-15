import { replace } from "connected-react-router";

import AppActions from "../../App/Main/AppActions";
import { thirdPartyAPI } from "../Util/Network";
import appRoutes from "../../App/Main/RouteConfigs";
import StorageService from "../Services/StorageService";
import EndPointConfig from "../Config/EndPointConfig";

const UserActions = {
  saveUserState: user => {
    return {
      type: "CHANGE_LOGGEDIN_USER_STATE",
      payload: { user }
    };
  },

  getUserState: token => {
    if (!token) {
      token = StorageService.getUserToken();
    }

    if (!token) {
      return {
        type: "",
        payload: null
      };
    }

    return async dispatch => {
      try {
        let response = await thirdPartyAPI.get(EndPointConfig.users.path, {
          params: {
            ID: 123456
          }
        });
        let user = response.data[0];

        if (!user) {
          return;
        }
        dispatch(UserActions.saveUserState(user));

        // Now redirect to the dashboard
        //dispatch(replace(appRoutes.dashboard.path));
      } catch (error) {
        console.log(error);
      }

      //dispatch(AppActions.toggleAppBusyState(false));
    };
  },

  getUser: (userId, action) => {
    if (!action) {
      action = {
        type: "CHANGE_USER_STATE",
        payload: {}
      };
    }

    return async dispatch => {
      try {
        let response = await thirdPartyAPI.get(
          EndPointConfig.users.path + "/" + userId
        );
        let user = response.data;
        action.payload = {...user, ...action.payload};
        dispatch(action);
      } catch (error) {
        console.log(error);
      }
    };
  },

  logout: () => {
    return async dispatch => {
      //dispatch(AppActions.toggleAppBusyState(true));

      try {
        let response = await thirdPartyAPI.get(EndPointConfig.users.path);

        StorageService.deleteUserToken();
        dispatch(UserActions.saveUserState({}));

        // Now redirect to the signin
        dispatch(replace(appRoutes.signin.path));
      } catch (error) {}

      //dispatch(AppActions.toggleAppBusyState(false));
    };
  }
};

export default UserActions;
