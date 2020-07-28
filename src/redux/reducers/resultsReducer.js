import * as types from "../actions/actionTypes";
import initialState from "./initialState";

function incrementIf(gameResult, triggerVal) {
  if (gameResult === triggerVal) {
    return 1;
  }
  return 0;
}
export default function (state = initialState.result, action) {
  switch (action.type) {
    case types.UPDATE_RESULTS:
      return {
        ...state,
        computerResult: action.computerResult,
        gameResult: action.gameResult,
        Wins: state.Wins + incrementIf(action.gameResult, "Winner"),
        Lose: state.Lose + incrementIf(action.gameResult, "Lose"),
        Tie: state.Tie + incrementIf(action.gameResult, "Draw"),
      };
    case types.RESULTS_LOADING:
      return {
        ...state,
        loading: state.loading + action.result,
      };
    default:
      return state;
  }
}
