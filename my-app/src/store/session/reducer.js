import { GET_SESSION_SUCCESS, GET_SESSION_ERROR } from "./types";

const initialState = {
  session: null,
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SESSION_SUCCESS:
      return { ...state, session: action.payload };
    case GET_SESSION_ERROR:
      return { ...state, session: null };
    default:
      return state;
  }
};
