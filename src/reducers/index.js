import { combineReducers } from "redux";

import { reducer as form } from "redux-form";

import headernavbar from "./headernavbarReducer";

const rootReducer = combineReducers({
  form,
  headernavbar
});

export default rootReducer;
