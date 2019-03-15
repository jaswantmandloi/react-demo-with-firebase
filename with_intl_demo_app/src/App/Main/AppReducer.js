const AppReducer = (state = { isAppBusy: true, isAppReady: false }, action) => {
  switch (action.type) {
    case "APP_BUSY_STATE_TOGGLE":
      state.isAppBusy = action.payload.isAppBusy;
      return state;
    case "APP_Ready_STATE_TOGGLE":
      state.isAppReady = action.payload.isAppReady;
      return state;

    default:
      return state;
  }
};

export default AppReducer;
