export const settingGame = () => ({
  type: "SETTING_GAME"
});

export const deckServed = () => ({
  type: "DECK_SERVED"
});

export const getUserName = name => ({
  type: "GET_USER_NAME",
  payload: { name }
});

export const goToHome = () => ({
  type: "GO_TO_HOME"
});

export const newRound = () => ({
  type: "NEW_ROUND"
});

export const deckCreation = () => ({
  type: "DECK_CREATION"
});

export const evaluateNewHands = () => ({
  type: "EVALUATE_NEW_HANDS"
});

export const findWinner = () => ({
  type: "FIND_WINNER"
});

export const winnerFound = () => ({
  type: "WINNER_FOUND"
});

export const reset = () => ({
  type: "RESET"
});
