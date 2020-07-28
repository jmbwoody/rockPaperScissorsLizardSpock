import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/results/";

export function getResults() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export default function sendResult(
  clientSelection,
  computerSelectionName,
  computerSelection,
  mapResult
) {
  let userSelection = clientSelection;
  if (userSelection === 1) {
    userSelection = "paper";
  }
  if (userSelection === 2) {
    userSelection = "rock";
  }
  if (userSelection === 3) {
    userSelection = "scissors";
  }
  if (userSelection === 4) {
    userSelection = "lizard";
  }
  if (userSelection === 5) {
    userSelection = "spock";
  }

  // compare logic
  let outputResult = "blank";
  if (userSelection === computerSelectionName) {
    outputResult = "tie, please try again.";
  }
  // rock selections
  if (userSelection === "rock" && computerSelectionName === "paper") {
    outputResult = "winner!";
  }
  if (userSelection === "rock" && computerSelectionName === "scissors") {
    outputResult = "winner!";
  }
  if (userSelection === "rock" && computerSelectionName === "lizard") {
    outputResult = "winner!";
  }
  if (userSelection === "rock" && computerSelectionName === "spock") {
    outputResult = "Loss!";
  }

  // paper selections
  if (userSelection === "paper" && computerSelectionName === "rock") {
    outputResult = "winner!";
  }
  if (userSelection === "paper" && computerSelectionName === "scissors") {
    outputResult = "Loss!";
  }
  if (userSelection === "paper" && computerSelectionName === "lizard") {
    outputResult = "Loss!";
  }
  if (userSelection === "paper" && computerSelectionName === "spock") {
    outputResult = "Winner!";
  }

  // scissors selections
  if (userSelection === "scissors" && computerSelectionName === "rock") {
    outputResult = "Loss!";
  }
  if (userSelection === "scissors" && computerSelectionName === "paper") {
    outputResult = "Loss!";
  }
  if (userSelection === "scissors" && computerSelectionName === "lizard") {
    outputResult = "Winner!";
  }
  if (userSelection === "scissors" && computerSelectionName === "spock") {
    outputResult = "Loss!";
  }

  // lizard selections
  if (userSelection === "lizard" && computerSelectionName === "rock") {
    outputResult = "Loss!";
  }
  if (userSelection === "lizard" && computerSelectionName === "paper") {
    outputResult = "Winner!";
  }
  if (userSelection === "lizard" && computerSelectionName === "scissors") {
    outputResult = "Loss!";
  }
  if (userSelection === "lizard" && computerSelectionName === "spock") {
    outputResult = "Winner!";
  }

  // spock selections
  if (userSelection === "spock" && computerSelectionName === "rock") {
    outputResult = "Winner!";
  }
  if (userSelection === "spock" && computerSelectionName === "paper") {
    outputResult = "Loss!";
  }
  if (userSelection === "spock" && computerSelectionName === "scissors") {
    outputResult = "Winner!";
  }
  if (userSelection === "spock" && computerSelectionName === "lizard") {
    outputResult = "Loss!";
  }

  console.log(
    "The computer selected " +
      computerSelectionName +
      " The outcome is a " +
      outputResult
  );

  // Redux
  return fetch(baseUrl + mapResult)
    .then(handleResponse)
    .then(dispatchAction)
    .catch(handleError);
}

export function deleteCourse(courseId) {
  return fetch(baseUrl + courseId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}

function dispatchAction(result) {
  //result/11
  let outcome = result.result;
  return outcome;
}
