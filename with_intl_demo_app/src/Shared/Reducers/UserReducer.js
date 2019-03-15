const UserReducer = (state = {}, action) => {
  switch (action.type) {
    case "CHANGE_LOGGEDIN_USER_STATE":
      state.loggedInUser = action.payload.user;
      return state;

    case "CHANGE_USER_STATE":
      state.user = action.payload.user;
      return state;

    default:
      return state;
  }
};

export default UserReducer;
