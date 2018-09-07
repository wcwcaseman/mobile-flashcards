import { ADD_QUESTION, ADD_DECK, RECEIVE_DECKS } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
    return {
      ...state,
      ...action.decks
    }
    case ADD_DECK :

      return {
        ...state,
        [action.deck.title]:action.deck,
      }
      case ADD_QUESTION :
        return {
          ...state,
          [action.card.title]: {
            ...state[action.card.title],
            questions: state[action.card.title].questions.concat({ question: action.card.question, answer: action.card.answer})
          }
        }

    default :
      return state
  }
}

export default decks