import { createStore } from "redux";
import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import { history, middlewares } from "./Middleware";
import InitReduces from "./InitReduces";

const store = createStore(
  connectRouter(history)(combineReducers(InitReduces)),
  middlewares
);

store.lastRducers = InitReduces;

export { store, history };
