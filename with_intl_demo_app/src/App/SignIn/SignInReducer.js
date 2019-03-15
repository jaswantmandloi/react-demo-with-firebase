export default (state = {}, action) => {
  switch (action.type) {
    
    case 'CHANGE_SIGNIN_STATE':      
      return {
        ...state,
        signInState : action.payload
      };    

    default:
      return state
  }
}

