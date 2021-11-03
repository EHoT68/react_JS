import {
  GET_GISTS_START,
  GET_GISTS_SUCCESS,
  GET_GISTS_ERROR,
  GET_GISTS_BY_NAME_START,
  GET_GISTS_BY_NAME_SUCCESS,
  GET_GISTS_BY_NAME_ERROR,
} from "./types";

const initialState = {
  gists: [],
  gistError: null,
  gistPending: false,

  gistsByName: [],
  gistByNameError: null,
  gistByNamePending: false,
};

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return { ...state, gistPending: true };
    case GET_GISTS_SUCCESS:
      return { ...state, gistPending: false, gists: action.payload };
    case GET_GISTS_ERROR:
      return { ...state, gistPending: false, gistError: action.payload };

    case GET_GISTS_BY_NAME_START:
      return { ...state, gistByNamePending: true };
    case GET_GISTS_BY_NAME_SUCCESS:
      return {
        ...state,
        gistByNamePending: false,
        gistsByName: action.payload,
      };
    case GET_GISTS_BY_NAME_ERROR:
      return {
        ...state,
        gistByNamePending: false,
        gistByNameError: action.payload,
      };
    default:
      return state;
  }
};
