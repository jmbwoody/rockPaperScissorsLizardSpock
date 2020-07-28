import * as types from "./actionTypes";

export function updateRockPaperScissors(computerSelection, gameResult) {
  if (computerSelection === 1) {
    computerSelection = "Paper";
  }
  if (computerSelection === 2) {
    computerSelection = "Rock";
  }
  if (computerSelection === 3) {
    computerSelection = "Scissors";
  }
  if (computerSelection === 4) {
    computerSelection = "Lizard";
  }
  if (computerSelection === 5) {
    computerSelection = "Spock";
  }

  return {
    type: types.UPDATE_RESULTS,
    computerResult: computerSelection,
    gameResult: gameResult.result,
  };
}

export function toggleLoader(result) {
  return {
    type: types.RESULTS_LOADING,
    result: result,
  };
}

export function resetComputerSelect() {
  return {
    type: types.RESETCOMPUTERSELECTION,
    result: "choose",
  };
}

export function showNewGameResults(userInput) {
  return {
    type: "gameUpdate",
    userInput,
  };
}

export function computeResult() {
  return function (dispatch) {
    // pull in API function and call it
    // move the THEN that has the dispatch here to emit action
  };
}
// Go to you component and make a mapDispatchToProps function
// use redux's connect HOC to call that function
// replace your API calls in the component with the dispatch call added to your props

// Get state from redux into your component and do useful things with that.
