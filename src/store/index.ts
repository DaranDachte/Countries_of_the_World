import { createStore, combineReducers } from "redux";
import { optionsReducer } from "./select/reducer";

const rootReducer = combineReducers({
  activeOption: optionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);
