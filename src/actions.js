// action types
export const ADD_QUEST = "ADD_QUEST";
export const SELECT_QUEST = "SELECT_QUEST";

// action creators
export function addQuest(text) {
  return { type: ADD_QUEST, text: text }
}

export function selectQuest(id) {
  return { type: SELECT_QUEST, id: id }
}