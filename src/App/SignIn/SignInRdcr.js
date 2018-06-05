import {registerReducer} from '../../Core/AsyncReducers';

const SignInRdcr = (state = {}, action) => {
  switch (action.type) {

    case 'SIGNIN_RESET':
      return {};

    case 'CHANGE_SIGNIN_STATE':      
      return {
        ...state,
        ...action.payload
      };
    default:
      return state
  }
}

registerReducer({SignInRdcr : SignInRdcr});

