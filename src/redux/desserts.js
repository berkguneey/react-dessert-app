import * as ActionTypes from "./ActionTypes";

export const Desserts = (
  state = { isLoading: true, errMessage: null, desserts: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_DESSERTS:
      return {
        ...state,
        isLoading: false,
        errMessage: null,
        desserts: action.payload,
      };

    case ActionTypes.DESSERTS_LOADING:
      return { ...state, isLoading: true, errMess: null, dishes: [] };

    case ActionTypes.DESSERTS_FAILED:
      return { ...state, isLoading: false, errMessage: action.payload };

    default:
      return state;
  }
};
