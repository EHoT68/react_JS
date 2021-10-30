export const crashReporter = () => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.error("report:", action);
  }
};
