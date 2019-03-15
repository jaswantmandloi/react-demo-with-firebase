
import { reducer } from 'redux-form';
 
let signUpFrmLastState = { intialState: 'intialState' };

const formReducer = reducer.plugin({
  SignUpForm: (state, action) => {  
    if(action.type == "@@redux-form/CHANGE") {      
      signUpFrmLastState = {...signUpFrmLastState, ...state.values};      
    }
    
    return state;
  }
});


export {formReducer, signUpFrmLastState}
