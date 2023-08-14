import { optionCases } from "./types";

export const changeOptionAction = (data: any) => ({
  type: optionCases.CHANGE_OPTION,
  payload: data,
});
