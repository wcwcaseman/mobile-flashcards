export const ADD_DECK = 'ADD_DECK'
export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'



export function receiveDecks (decks) {
    return {
      type: RECEIVE_DECKS,
      decks,
    }
  }

export function addDeck (deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function receiveQuestions (questions) {
    return {
      type: RECEIVE_QUESTIONS,
      questions,
    }
  }

export function addQuestion (card) {
  return {
    type: ADD_QUESTION,
    card,
  }
}