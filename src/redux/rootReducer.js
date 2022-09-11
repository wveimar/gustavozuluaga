import { combineReducers } from "redux";
import { app } from "./modules/app/reducer";

const rootReducer = combineReducers({
    app: app,
  });
  
  export default rootReducer;