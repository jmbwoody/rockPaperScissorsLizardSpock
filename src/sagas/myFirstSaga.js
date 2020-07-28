import { takeEvery, call, put } from "redux-saga/effects";
import {
  updateRockPaperScissors,
  toggleLoader,
  resetComputerSelect,
} from "../redux/actions/resultsActions";

const baseUrl = process.env.API_URL + "/results/";

export default function* sagaHandler() {
  yield takeEvery("gameUpdate", myFirstSaga);
}

function* myFirstSaga(action) {
  //Listen for action, call handler when we hear an action we care about

  const computerSelection = Math.floor(Math.random() * 5) + 1;
  const userSelection = action.userInput;
  const mapResult = userSelection * 10 + computerSelection;

  yield put(resetComputerSelect());

  // change loader to true;
  yield put(toggleLoader(-1));

  console.log("Map Result = " + mapResult);
  const response = yield call(() => fetch(baseUrl + mapResult));
  const gameResult = yield call(() => response.json());
  console.info(gameResult);

  yield put(updateRockPaperScissors(computerSelection, gameResult));
  //changes loader to false
  yield put(toggleLoader(1));
}
