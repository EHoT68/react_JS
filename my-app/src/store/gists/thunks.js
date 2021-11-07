import {
  getGistsStart,
  getGistsSucess,
  getGistsError,
  getGistsByNameStart,
  getGistsByNameSucess,
  getGistsByNameError,
} from "./actions";

export const getGists =
  (page = 1) =>
  async (dispatch, _, api) => {
    try {
      dispatch(getGistsStart());

      const { data } = await api.getGistsApi(page);

      dispatch(getGistsSucess(data));
    } catch {
      dispatch(getGistsError("get gists error"));
    }
  };

export const getGistsByName =
  (name = "") =>
  async (dispatch, _, api) => {
    try {
      dispatch(getGistsByNameStart());

      const { data } = await api.searchGistsByUserNameApi(name);

      dispatch(getGistsByNameSucess(data));
    } catch {
      dispatch(getGistsByNameError("get gists by name error"));
    }
  };
