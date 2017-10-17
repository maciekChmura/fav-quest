const defaultState = [
  {
    id: "3397ad85-dd99-49d3-95ab-c6f96ced5d15",
    name: "example quest",
    places: ["Kraków", "Warszawa"]
  }
];

const quests = (state = defaultState, action) => {
  switch (action.type) {
    case "SAVE_QUEST":
      if (state.find(element => element.id === action.quest.id)) { //check if quest exists
        return state.map(element => {
          if (element.id === action.quest.id) { //find and replace
            return action.quest;
          } else {
            return element; //return existing
          }
        });
      } else { //return current state and add new
        return [
          ...state,
          action.quest
        ]
      }
    case "DELETE_QUEST":
      return state.filter(element => element.id !== action.quest.id)

    default:
      return state
  }
};

export default quests;
