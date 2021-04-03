import * as ActionTypes from "./ActionTypes";

export const addDesserts = (desserts) => ({
  type: ActionTypes.ADD_DESSERTS,
  payload: desserts,
});

export const dessertsFailed = (errMessage) => ({
  type: ActionTypes.DESSERTS_FAILED,
  payload: errMessage,
});

// Fetch Methods

export const fetchDesserts = () => (dispatch) => {
  return fetch("http://localhost:3001/desserts")
    .then(
      (response) => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error(
            "Error " + response.status + " : " + response.statusText
          );
          error.response = response;
          throw error;
        }
      },
      (error) => {
        var errMessage = new Error(error.message);
        throw errMessage;
      }
    )
    .then((response) => response.json())
    .then((desserts) => dispatch(addDesserts(desserts)))
    .catch((error) => dispatch(dessertsFailed(error.message)));
};
