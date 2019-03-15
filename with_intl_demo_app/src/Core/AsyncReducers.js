
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import {store, history} from '../Core/Store';



export function registerReducer(newReducers) {
  const state = store.getState();
  const lastReducers = store.lastRducers;

  let finalNewReducers = {};
  for(let newReducerName in newReducers) {
    if(newReducerName in lastReducers) {
      continue;
    }
    finalNewReducers[newReducerName] = newReducers[newReducerName];
  }

  if(!Object.keys(finalNewReducers).length) {
    return;
  }

  newReducers = {...lastReducers, ...finalNewReducers};
  store.lastRducers = newReducers;
  const allNewReducers = createReducer(newReducers, store);
  
  store.replaceReducer(connectRouter(history)(allNewReducers));  
}



function createReducer (reducers, store) {
    return combineReducers({      
      ...reducers
    });
}
