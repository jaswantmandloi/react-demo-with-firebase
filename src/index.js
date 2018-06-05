import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';


import './index.css';
import App from './App/App';
import { store, history} from './Core/Store';
//import registerServiceWorker from './registerServiceWorker';
import {database} from './Shared/Firebase';

let baseUrl = "http://localhost/js/rt/lazy-load-routes-master/build/";

function indexInit() {
    return (
        <Provider store={store}>
          <ConnectedRouter history={history} basename={baseUrl}>
            <App />
          </ConnectedRouter>
        </Provider>
      
      )
}

const renderInit = () => {
  ReactDOM.render(indexInit(), document.getElementById('root'));
  //registerServiceWorker();
}

renderInit();

// database().ref('users').once('value', (snapshot) => {
//   renderInit();
// });


