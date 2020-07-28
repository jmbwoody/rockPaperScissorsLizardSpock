import myFirstSaga from "./myFirstSaga";
import { all, call } from "redux-saga/effects";

export default function* mySaga() {
  yield all([call(myFirstSaga)]);
}
