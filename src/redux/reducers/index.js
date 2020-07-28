import { combineReducers } from "redux";
import courses from "./courseReducer";
import authors from "./authorReducer";
import results from "./resultsReducer";

import apiCallsInProgress from "./apiStatusReducer";

const rootReducer = combineReducers({
  courses,
  authors,
  apiCallsInProgress,
  results,
});

export default rootReducer;
