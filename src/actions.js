export const changeURL = (url, state) => ({ type: "CHANGE_URL", url, state });
export const popstate = (location, state) => {
  return {
    type: "POP",
    ...state
  };
};
export const pushstate = (location, state) => {
  return {
    type: "pushstate",
    ...state
  };
};
