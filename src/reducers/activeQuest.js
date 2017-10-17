const places = (state, action) => {
  switch (action.type) {
    case "ADD_PLACE":
      return [
        ...state,
        action.place,
      ];
    case "REMOVE_PLACE":
      return state.filter(place => place !== action.place);
    case "EDIT_PLACE":
      return state.map((element, index) => {
        if (index === action.id) {
          return action.place;
        } else {
        return element;
        }
      });
    default:
      return state;
  }
};

const activeQuest = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_QUEST":
      return action.quest;
    case "CREATE_QUEST":
      return {
        id: action.id,
        name: "",
        places: [],
      };
    case "UNLOAD_QUEST":
      return {};
    case "SET_NAME":
      return {
        ...state,
        name: action.name
      };
    default:
      return {
        ...state,
        places: places(state.places, action),
      }
  }
};

export default activeQuest;
