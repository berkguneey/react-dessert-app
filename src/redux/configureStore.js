import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Desserts } from "./desserts";

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      desserts: Desserts,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
