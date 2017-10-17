// action types
export const ADD_QUEST = "ADD_QUEST";
export const LOAD_QUEST = "LOAD_QUEST";
export const UNLOAD_QUEST = "UNLOAD_QUEST";
export const CREATE_QUEST = "CREATE_QUEST";

// action creators
export function addQuest(text) {
  return { 
    type: ADD_QUEST, 
    text: text }
}

export function loadQuest(quest) {
  return { 
    type: LOAD_QUEST, 
    quest: quest }
}

export function unLoadQuest(quest) {
  return { 
    type: UNLOAD_QUEST, 
    quest: quest }
}

export function createQuest(id) {
  return {
    type: CREATE_QUEST,
    id: id
  }
}