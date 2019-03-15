import Axios from 'axios';

import Config from '../Config';
import appRoutes from "../../App/Main/RouteConfigs";
import {redirect} from "./Util";

const thirdPartyAPIInstance = Axios.create({
  baseURL: Config.thirdPartyUrl,
  timeout: 300000,
  responseType: 'json',
  transformRequest: [function (data, headers) {
    // Do whatever you want to transform the data
 
    return data;
  }],

  params: {
    ID: 12345
  },

  // `data` is the data to be sent as the request body
  // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
  // When no `transformRequest` is set, must be of one of the following types:
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - Browser only: FormData, File, Blob
  // - Node only: Stream, Buffer

  data: {
    firstName: 'Fred'
  },

  // `headers` are custom headers to be sent
  headers: {'X-Requested-With': 'XMLHttpRequest'},
 
  // `transformResponse` allows changes to the response data to be made before
  // it is passed to then/catch
  transformResponse: [function (data) {
    // Do whatever you want to transform the data
    
    // Redirect user at any point when server sent unauthenticated response
    if(0) {
      data = {};      
      redirect(appRoutes.signin.path);
    }

    return data;
  }],
});



let thirdPartyAPI = () => {
  return thirdPartyAPIInstance;
}

thirdPartyAPI = thirdPartyAPI();

export {thirdPartyAPI};