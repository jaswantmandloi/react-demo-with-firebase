const busyCallers = [];

const AppActions = {
  toggleAppBusyState: isAppBusy => { 

    if(isAppBusy) {
      busyCallers.push(1);
    } else {
      busyCallers.pop();
    }

    if(busyCallers.length > 0) {
      return {
        type: "APP_BUSY_STATE_TOGGLE",
        payload: {isAppBusy : true}
      };
    }

    return {
      type: "APP_BUSY_STATE_TOGGLE",
      payload: {isAppBusy}
    };
  },
  toggleAppReadyState: isAppReady => {
    return {
      type: "APP_Ready_STATE_TOGGLE",
      payload: {isAppReady}
    };
  }
};

export default AppActions;
