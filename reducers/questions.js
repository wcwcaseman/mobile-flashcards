import { ADD_QUESTION, RECEIVE_QUESTIONS } from '../actions'

function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
    return {
      ...state,
      ...action.questions
    }
    default :
      return state
  }
}

export default questions