import { combineReducers } from 'redux';
import { ADD_QUEST } from "./actions";

function quests(state = [], action) {
  switch (action.type) {
    case ADD_QUEST:
    return [...state, {
      text: action.text
    }]
    default:
    return state
  }
}

const questApp = combineReducers({
  quests
})

export default questApp;