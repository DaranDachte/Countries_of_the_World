import { optionCases, changeOption } from "./types";

const defaultState = {
  option: "Asia",
};

export const optionsReducer = (state = defaultState, action: changeOption) => {
  switch (action.type) {
    case optionCases.CHANGE_OPTION:
      console.log(action.payload);
      state.option = action.payload;
      return { ...state };
    default:
      return state;
  }
};
