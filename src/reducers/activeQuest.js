import { SELECT_QUEST } from "../actions";

const places = (state, action) => {
  switch (action.type) {
    case 'ADD_PLACE':
      return [
        ...state,
        action.place,
      ];
    case 'REMOVE_PLACE':
      return state.filter(place => place !== action.place);
    default:
      return state;
  }
};

const activeQuest = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_QUEST':
      return action.quest;
    case 'CREATE_QUEST':
      return {
        id: action.id,
        name: 'New quest!',
        places: [],
      };
    case 'UNLOAD_QUEST':
      return {};
    default:
      return {
        ...state,
        places: places(state.places, action),
      }
  }
};

export default activeQuest;
