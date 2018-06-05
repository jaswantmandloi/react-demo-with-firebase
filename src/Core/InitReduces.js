
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
 

import { history } from './Store';
import  FirebaseRdcr from '../Shared/FirebaseRdcr';

const HistoryReducer = (state = {history : null}, action) => {
  return {
    history : history
  };
}

const initReducers = {
  router: routerReducer,
  HistoryReducer : HistoryReducer,
  form : formReducer,
  firebase : FirebaseRdcr
};

export default initReducers
