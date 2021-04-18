import * as ActionTypes from "./ActionTypes";

export const Desserts = (
  state = { errMessage: null, desserts: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DESSERTS:
      return { ...state, errMessage: null, desserts: action.payload };

    case ActionTypes.DESSERTS_FAILED:
      return { ...state, errMessage: action.payload };

    default:
      return state;
  }
};
