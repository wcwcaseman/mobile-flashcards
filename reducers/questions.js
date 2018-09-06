import { ADD_QUESTION, RECEIVE_QUESTIONS } from '../actions'

function questions (state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS :
    return {
      ...state,
      ...action.questions
    }
    case ADD_QUESTION :
      return {
        ...state,
        [action.question.title]:action.question,
      }
    default :
      return state
  }
}

export default questions