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

export const deckCreation = deck => ({
  type: "DECK_CREATION",
  payload: { deck }
});

export const giveCardsToPlayers = (playerHand, cpuHand) => ({
  type: "GIVE_CARDS_TO_PLAYERS",
  payload: {
    playerHand,
    cpuHand
  }
});

export const findWinner = (playerCombo, cpuCombo) => ({
  type: "FIND_WINNER",
  payload: {
    playerCombo,
    cpuCombo
  }
});

export const winnerFound = winner => ({
  type: "WINNER_FOUND",
  payload: {
    winner
  }
});

export const reset = () => ({
  type: "RESET"
});

export const cardSelected = (selected, id) => ({
  type: "CARD_SELECTED",
  payload: {
    selected,
    id
  }
});

export const addOrRemoveCard = (newCard, id) => ({
  type: "ADD_OR_REMOVE_CARD",
  payload: { newCard, id }
});

export const changeCards = () => ({
  type: "CHANGE_CARDS"
});

export const fillPlayerHandWithCards = replacedCards => ({
  type: "FILL_PLAYER_HAND_WITH_CARDS",
  payload: {
    replacedCards
  }
});

export const playerBid = money => ({
  type: "PLAYER_BID",
  payload: { money }
});

export const cpuBid = money => ({
  type: "CPU_BID",
  payload: { money }
});
