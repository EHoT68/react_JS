export const gistsSelector = (state) => ({
  gists: state.gists.gists,
  gistError: state.gists.gistError,
  gistPending: state.gists.gistPending,
});

export const gistsByNameSelector = (state) => ({
  gistsByName: state.gists.gistsByName,
  gistByNameError: state.gists.gistByNameError,
  gistByNamePending: state.gists.gistByNamePending,
});
