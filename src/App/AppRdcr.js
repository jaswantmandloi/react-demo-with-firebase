import {registerReducer} from '../Core/AsyncReducers';

const AppRdcr = (state = {isAppBusy : true}, action) => {
  switch (action.type) {
    case 'INIT':
      return {};

    case 'APP_BUSY_STATE_CHANGE':
      state.isAppBusy = action.payload.isAppBusy;
      return state
    default:
      return state
  }
}

registerReducer({AppRdcr : AppRdcr});

