import { replace } from "connected-react-router";

import {store} from '../../Core/Store';

const redirect = (urlToRedirect) => {
  store.dispatch(replace(urlToRedirect));
}

export {redirect};