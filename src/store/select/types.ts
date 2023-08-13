export enum optionCases {
  CHANGE_OPTION = "CHANGE_OPTION",
}

export interface changeOption {
  type: optionCases;
  payload: any;
}
