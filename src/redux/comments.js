import * as ActionTypes from "./ActionTypes";

export const Comments = (
    state = { errMessage: null, comments: [] },
    action
) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMessage: null, comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMessage: action.payload };

        default:
            return state;
    }
};
