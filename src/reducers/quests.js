import { ADD_QUEST } from "../actions";

const defaultState = [
  {
    name: 'do mamy',
    places: ['krakow', 'stalowa wola']
  },
  {
    name: 'do pracy',
    places: ['ruczaj', 'novomatic']
  },
];

const quests = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_QUEST:
      return [
        ...state,
        {
          name: action.text,
          places: [],
        }
      ];
    default:
      return state
  }
};

export default quests;
