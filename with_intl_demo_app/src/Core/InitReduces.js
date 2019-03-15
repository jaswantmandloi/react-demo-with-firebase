
import { formReducer } from './FormReducer';
import { history } from './Store';
import UserReducer from '../Shared/Reducers/UserReducer';
import { connectRouter } from 'connected-react-router';


const HistoryReducer = (state = {history : null}, action) => {
  return {
    history : history
  };
}

const initReducers = {  
  form : formReducer,
  HistoryReducer,
  UserReducer,
  router: connectRouter(history)
};

export default initReducers
