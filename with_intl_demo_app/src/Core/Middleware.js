import { routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import { applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";

let middlewares = null;
const routeMiddlewareCallbacks = [];
const promiseMiddleware = store => next => action => {
  next(action);
};

const localStorageMiddleware = store => next => action => {
  next(action);
};

const history = createHistory();
// Build the middleware for intercepting and dispatching navigation actions
const myRouterMiddleware = routerMiddleware(history);

// Append middlewares
let middlewaresArr = [];


middlewaresArr.push(promiseMiddleware);
middlewaresArr.push(localStorageMiddleware);
middlewaresArr.push(myRouterMiddleware);
middlewaresArr.push(thunk);

if (process.env.NODE_ENV !== "production") {
  // Enable additional logging in non-production environments.
  middlewaresArr.push(createLogger());
}

// Apply middlewares based on environment
if (process.env.NODE_ENV === "production") {
  middlewares = compose(applyMiddleware(...middlewaresArr));
} else {
  middlewares = composeWithDevTools(applyMiddleware(...middlewaresArr));
}

export { history, middlewares, routeMiddlewareCallbacks };
