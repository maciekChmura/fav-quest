// action types
export const ADD_QUEST = "ADD_QUEST";

// action creators
export function addQuest(text) {
  return { type: ADD_QUEST, text: text}
}