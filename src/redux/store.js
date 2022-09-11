import { combineReducers } from "redux";
import rootReducer from "./rootReducer";

const store = combineReducers(rootReducer)

export { store };
