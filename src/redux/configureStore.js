import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Desserts } from "./desserts";
import { Comments } from "./comments";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      desserts: Desserts,
      comments: Comments,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
